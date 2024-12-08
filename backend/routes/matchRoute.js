const express = require('express')
const router = express.Router();
const userModel = require('../models/userModel')
const {authenticate} = require('../middleware/authMiddle')

router.get('/match', authenticate, async (req, res) => {
    const { skills, interests } = req.query;
  
    try {
      const query = {};
  
      if (skills) query.skills = { $in: skills.split(',') };
      if (interests) query.interests = { $in: interests.split(',') };
  
      const matches = await userModel.find(query)
        .where('_id').ne(req.user.id) // Exclude the current user
        .select('-password'); // Exclude password
  
      res.status(200).send({ message: 'Matches found.', matches });
    } catch (err) {
      res.status(500).send({ message: 'Error finding matches.', error: err });
    }
  });

  module.exports = router ;