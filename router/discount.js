const express = require("express");
const router=express.Router();
const discountController =require("../controler/discountController");
router.get('/getAll',discountController.getAll);
router.delete('/delete:id',discountController.deleteId);
router.post('/add',discountController.addDiscount);
router.post('/update',discountController.updateDiscount);
router.get('/getDiscount:id',discountController.getid);
module.exports=router;