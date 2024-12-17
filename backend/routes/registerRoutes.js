const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const userModel = require('../models/userModel')
const {generateToken} = require('../utils/generateToken')

router.post('/', (req, res) => {
    const { username, email, password, role } = req.body;
  
    try {
      bcrypt.genSalt(10,(err,salt)=>{
          bcrypt.hash(password,salt, async(err,hash)=>{
               let user = userModel.create({
                username,
                email,
                password : hash,
                role
               });

               let token = generateToken(user);
               res.cookie("token", token);
               res.send({token});
          })
      })
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).send({ message: 'Username or email already exists' });
      }
      res.status(500).send({ message: 'Error registering user', error: err });
    }
  });

module.exports = router ;