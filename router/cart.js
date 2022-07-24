const express = require("express");
const router=express.Router();
const cartController= require("../controler/cartController");
router.get('/getAll/:email',cartController.getAll);
router.post('/addCart:id',cartController.addCart);
router.post('/editCart/:id',cartController.getById);
router.post('/deleteCart',cartController.deleteCart)
router.delete('/deleteCartPig:email',cartController.deleteCartPig)
router.post('/updateCart',cartController.updateCart);
module.exports=router;