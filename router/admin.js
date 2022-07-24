const express = require("express");
const router=express.Router();
const adminController =require("../controler/adminController");
router.get('/getall',adminController.getAll);

module.exports=router;