const Order = require("../db/Order");

let addorder =  async (req, res) => {
    let getproduct = new Order({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country: req.body.country,
        address: req.body.address,
        city: req.body.city,
        zipcode: req.body.zipcode,
        date:req.body.date,
        id : req.body.id,
        price:req.body.price
    }) 
    let productsave =  await getproduct.save()
       res.send(productsave) 

}
let getallorder = async (req,res) =>{
let getallorder = await Order.find().exec()
res.send(getallorder) 
} 
;
let acceptuser = async (req,res) => {
  try{
const  {id} = req.params    
const order  = await Order.findByIdAndUpdate(id,{status : "process"},{new: true})
if(!order){
  return res.status(404).json({ message: 'Order not found' });
}
res.json(order)
  }catch(err){
    res.status(500).json("server internal")
  }
}
let rejectstatus = async(req,res) =>{
  try{
    const  {id} = req.params
    const order  = await Order.findByIdAndUpdate(id,{status : "reject"},{new: true})
    if(!order){
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order)
      }catch(err){
        res.status(500).json("server intenal")
      }
}
let usercheck  = async (req, res) => {
  try {
    const  id  = req.body.params
    const orders = await Order.find(id);
    res.json(orders);
  } catch (err) {
    console.error(err);
  }
};
module.exports = {
    addorder,
    getallorder,
    acceptuser,
    rejectstatus,   
    usercheck,
}