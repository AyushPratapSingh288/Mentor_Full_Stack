const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const db = require('./config/db-config')
const userResister = require('./routes/registerRoutes')
const userLogin = require('./routes/userLogin')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));


app.use('/register',userResister);
app.use('/login',userLogin);



// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
