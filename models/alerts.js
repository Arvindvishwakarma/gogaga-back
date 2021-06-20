const mongoose = require('mongoose');
let alertSchema = new mongoose.Schema({
    OwnerName:String,
    Vno:String,
    longnitude:String,
    latitude:String,
});

module.exports=mongoose.model('alert',alertSchema)