const express = require("express");
const router=express.Router();
const brandController =require("../controler/brandController");
router.get('/getAll',brandController.getAll);
router.delete('/delete:id',brandController.deleteId);
router.post('/add',brandController.addBrand);
router.post('/update',brandController.updateBrand);
router.get('/getBrand:id',brandController.getid);
module.exports=router;