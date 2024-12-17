const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const db = require('./config/db-config')
const userModel = require('./models/userModel')
const userResister = require('./routes/registerRoutes')
const userLogin = require('./routes/userLogin')
const matchRoutes = require('./routes/matchRoute')
const profileRouter = require('./routes/profileSetup')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));

app.get('/', async (req,res)=>{
   const user  = await userModel.find();
   let user_data = user.map((user)=>({
    username : user.username,
    id : user._id,
    role : user.role ,
    skills : user.skills,
    interests : user.interests
   }))
   res.send({user_data}).status(200)
})
app.use('/register',userResister);
app.use('/login',userLogin);
app.use('/profile', profileRouter);
app.use('/friend/request' , matchRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
