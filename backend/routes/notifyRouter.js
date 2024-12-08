const express = require('express')
const router = express.Router();
const userModel = require('../models/userModel')
const authenticate = require('../middleware/authMiddle')
const addNotification = async (userId, message) => {
    const user = await userModel.findById(userId);
    user.notifications.push({ message });
    await user.save();
  };
  
  // Example: Notify on request
  router.post('/', authenticate, async (req, res) => {
    const { recipientId } = req.body;
  
    try {
      const recipient = await userModel.findById(recipientId);
      if (!recipient) return res.status(404).send({ message: 'Recipient not found.' });
  
      recipient.requests.push({ sender: req.user.id, status: 'pending' });
      await recipient.save();
  
      // Add notification
      await addNotification(recipientId, `${req.user.id} sent you a mentorship request.`);
  
      res.status(200).send({ message: 'Request sent successfully.' });
    } catch (err) {
      res.status(500).send({ message: 'Error sending request.', error: err });
    }
  });
  