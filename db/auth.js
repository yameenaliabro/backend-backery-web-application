const mongoose = require("mongoose")
let userschema  = new mongoose.Schema({
    username : {type : String},
    email : {type : String,required : true},
    password : {type : String,required : true},
    role :  {type :String,
        required : true,
        enum :["admin","user"],
        default:"user"    
    },
})
let Auth = mongoose.model("User",userschema)
module.exports = Auth
    
