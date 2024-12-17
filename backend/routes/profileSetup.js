const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {authenticate} = require('../middleware/authMiddle')
const userModel = require('../models/userModel')
const {generateToken} = require('../utils/generateToken')

router.get('/', (req, res) => {
  res.json(user);
});


router.put('/:field', (req, res) => {
  const { field } = req.params;
  const value = req.body[field];

  if (!user.hasOwnProperty(field)) {
    return res.status(400).json({ error: `Field '${field}' does not exist.` });
  }

  if (field === 'skills' || field === 'interests') {
    user[field] = Array.isArray(value) ? value : [];
  } else {
    user[field] = value;
  }

  res.json({ [field]: user[field] });
});
  module.exports = router ;