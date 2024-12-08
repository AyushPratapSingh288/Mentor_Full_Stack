const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')
const {generateToken} = require('../utils/generateToken')

router.post('/', authenticate, async (req, res) => {
    const { skills, interests, bio } = req.body;
  
    try {
      const user = await userModel.findById(req.user.id);
      if (!user) return res.status(404).send({ message: 'User not found.' });
  
      user.skills = skills || user.skills;
      user.interests = interests || user.interests;
      user.bio = bio || user.bio;
  
      await user.save();
      res.status(200).send({ message: 'Profile updated successfully.', user });
    } catch (err) {
      res.status(500).send({ message: 'Error updating profile.', error: err });
    }
  });
  
router.delete('/delete', authenticate, async (req, res) => {
    try {
      await userModel.findByIdAndDelete(req.user.id);
      res.status(200).send({ message: 'Profile deleted successfully.' });
    } catch (err) {
      res.status(500).send({ message: 'Error deleting profile.', error: err });
    }
  });

  module.exports = router ;