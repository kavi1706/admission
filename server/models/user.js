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
    dob:{
        type:Date,
        
    },
    hsc:{
        type:String,
        required:true
    },
    sslc:{
        type:String,
        required:true
    },
    
    joinedOn:{
        type:Date,
        default:Date.now,
    }
    
    
});
module.exports = mongoose.model("users",userSchema);