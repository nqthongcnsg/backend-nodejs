const express = require("express");
const router=express.Router();
const typeController =require("../controler/typeController");
router.get('/getAll',typeController.getAll);
router.delete('/delete:id',typeController.deleteId);
router.post('/add',typeController.addType);
router.post('/update',typeController.updateType);
router.get('/getType:id',typeController.getid);
module.exports=router;