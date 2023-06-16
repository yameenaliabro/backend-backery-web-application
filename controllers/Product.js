const e = require("express")
const Product = require("../db/Product")
exports.allproduct = async(req,res)=>{
    let  allproduct  =  await Product.find()
    res.send(allproduct)
}