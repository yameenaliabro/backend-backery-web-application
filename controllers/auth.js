const Auth = require("../db/auth")
const bcrypt = require("bcrypt")
const { response } = require("express") 
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()
exports.CreateUsr = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const  exsistnguser  = await Auth.findOne({ email })
        if (exsistnguser) {
            return res.status(409).json({ message: 'user already exists' })
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        const newuser = new Auth({
            username,
            email,
            password: hashedpassword
        })
        let resp = await newuser.save()
        res.status(201).json({ message: "User sucesfull registered" })
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" })
        }
}
exports.FindUser = async (req, res) => {
    const { email, password } = req.body; 
    const user = await Auth.findOne({ email });
    if (!user) return res.status(404).send('User not found');
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid password');
    const token = jwt.sign({ userId : user._id }, process.env.API_KEY,{expiresIn : "10h"});
    res.json({ token,user });
  }
exports.UserDeatail = async (req,res) =>{                                                       
    try{
        const id  = req.params.id   
        const response =  await  Auth.findById(id)
        if(!response){
            return res.status(404).json({error : "User not found"})
        }   
        return res.json(response)
    }catch(err){
        res.status(500).json({error : "Server error"})  
        console.log(err)
    }
}
