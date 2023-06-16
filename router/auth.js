let express = require("express")
let router = express.Router()
const Usercontroller = require("../controllers/auth")
router.post("/signup", Usercontroller.CreateUsr);
router.post("/login", Usercontroller.FindUser)
router.get("/userdetail/:id",Usercontroller.UserDeatail)
module.exports = router