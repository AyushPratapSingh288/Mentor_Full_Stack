const express = require('express')
const router = express.Router();
const userModel = require('../models/userModel')
const authenticate = require('../middleware/authMiddle')
router.post('/send', authenticate, async (req, res) => {
    const { recipientId } = req.body;
  
    try {
      const recipient = await userModel.findById(recipientId);
      if (!recipient) return res.status(404).send({ message: 'Recipient not found.' });
  
      recipient.requests.push({ sender: req.user.id, status: 'pending' });
      await recipient.save();
  
      res.status(200).send({ message: 'Request sent successfully.' });
    } catch (err) {
      res.status(500).send({ message: 'Error sending request.', error: err });
    }
  });
  
router.post('/respond', authenticate, async (req, res) => {
    const { requestId, status } = req.body;
  
    try {
      const user = await userModel.findById(req.user.id);
      const request = user.requests.id(requestId);
  
      if (!request) return res.status(404).send({ message: 'Request not found.' });
  
      request.status = status;
      await user.save();
  
      res.status(200).send({ message: 'Request updated successfully.' });
    } catch (err) {
      res.status(500).send({ message: 'Error updating request.', error: err });
    }
  });
  