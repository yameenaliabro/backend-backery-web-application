const mongoose = require('mongoose');
let orderschema = mongoose.Schema({
        userid : {type : mongoose.Schema.Types.ObjectId,ref : 'user'},
        firstname : {type : String,required : true},
        lastname : {type : String,required : true},
        country : {type : String,
        enum:["Pakistan","India","Bangladesh","Afghanistan"],message:"{VALUE} is not supported",
        },
        address : {type : String,required : true},
        city : {type : String,required : true,
        enum:["Karachi","Hyderabd"],message:"{VALUE} is not supported",},
        zipcode : {type: Number, required : true} ,
        date: { type: Date, default: Date.now },
        status: { type: String, enum: ['rejected', 'process',"pending"], default: 'pending' },
        id : {type : String,},
        price : {type : String}
})
let Order = mongoose.model("Orders",orderschema)
module.exports = Order 