const express = require("express");
const router=express.Router();
const cateController =require("../controler/cateController");
router.get('/getAll',cateController.getAll);
router.delete('/delete:id',cateController.deleteId);
router.post('/add',cateController.addCategories);
router.post('/update',cateController.updateCategories);
router.get('/getCategories:id',cateController.getid);
module.exports=router;