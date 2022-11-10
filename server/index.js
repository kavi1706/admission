const express = require('express')
const app = express()

const cors=require("cors")
const mongoose = require('mongoose')
const jwt=  require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User=  require('./models/user.js')
const DATABASE_URL = 'mongodb+srv://aparna:aparna@cluster0.xa6hsno.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Connection open")
}).catch(err => {
    console.log("OOPS !! ERROR")
})

app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }));


app.use(cors())

app.get('/all',async(req,res)=>{
    try {
        const users = await User.find({})
        console.log(users)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        await User.findByIdAndDelete(id)
        res.status(200).send('success')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.post('/edit/:id',async(req,res)=>{
    const {id}=req.params;
    const {name,photourl,mobile,email,productname,description} = req.body
    console.log({...req.params})
    try {
        await User.findOneAndUpdate({_id:id},{name,photourl,mobile,email,productname,description})
        res.status(200).send('success')
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get('/view/:id',  async(req,res)=>{
    try{
        const {id} = req.params
        const users = await User.findById(id)
        res.status(200).json(users)
    }catch(error){
        res.status(500).send(error.message)
    } 
})

app.post("/signup",async(req,res)=>{
   
    const {name,photourl,mobile,email,productname,description} = req.body
    try {
        const existinguser=await User.findOne({email})
        if(existinguser){
            return res.status(400).json({message:'User already found..'})
        }
        
        const newUser=new User({...req.body})
        await newUser.save();
        const token = jwt.sign({email:newUser.email,id:newUser._id},'token',{expiresIn:'1h'})
        res.status(200).json({result:newUser,token})
    } catch (err) {
        res.status(500).json('Something went worng...')
    }
});



app.listen(8080,()=> console.log("server is running"))