const mongoose = require('mongoose');

const {Schema}=mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    photourl:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    
    joinedOn:{
        type:Date,
        default:Date.now,
    }
    
    
});
module.exports = mongoose.model("User",userSchema);