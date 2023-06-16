const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/cakeupwebsite').then(() => {
}).catch(() => {
    console.log("error")
})
module.exports = mongoose 