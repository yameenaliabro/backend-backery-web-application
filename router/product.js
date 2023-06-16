let express = require("express")
let product = express.Router()
const produnctcontroler = require("../controllers/Product")
product.get("/allproduct",produnctcontroler.allproduct)
module.exports = product        