const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId(),
    name:String,
    location:String,
});

module.exports=mongoose.model('users',userSchema)