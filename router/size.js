const express = require("express");
const router=express.Router();
const sizeController=require("../controler/sizeController");
router.get('/getAll',sizeController.getAll);
router.delete('/delete:id',sizeController.deleteId);
router.post('/add',sizeController.addSize);
router.post('/update',sizeController.updateSize);
router.get('/getSize:id',sizeController.getid);
module.exports=router;