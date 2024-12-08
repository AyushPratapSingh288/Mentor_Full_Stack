const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mentorship').then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err.data)
})
module.exports = mongoose.connection ;