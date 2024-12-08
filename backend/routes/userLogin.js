const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')
const {generateToken} = require('../utils/generateToken')
router.post('/', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await userModel.findOne({ email });
      if (!user) return res.status(400).send({ message: 'Invalid email or password' });
  
      const isPasswordValid = await bcrypt.compare(password, user.password, (err, result)=>{
        if(result){
            let token = generateToken(user);
            res.cookie("token",token);
            res.send({ message: 'You can login' })
         }
         else{
            res.send({ message: 'Invalid email or password' });
         }
      });

    } catch (err) {
      res.status(500).send({ message: 'Error logging in', error: err });
    }
  });

module.exports = router 