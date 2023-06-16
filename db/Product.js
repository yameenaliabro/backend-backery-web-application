const mongoose  = require("mongoose")
let productschema = mongoose.Schema({
    title: { type: String, required: true },
    description: {
        type: String, required: true,
        validate: {
            validator: (val) => {
                if (val.length == 10) {
                }
            },
            message: (props) => {
            }
        }
    },
    price: { type: Number, required: true },
    rating: { type: Number, min: 0, max: 5, },
    brand: { type: String, required: true },
    thumbnail: { type: String },
})
let Product =  mongoose.model("Products",productschema)
module.exports = Product