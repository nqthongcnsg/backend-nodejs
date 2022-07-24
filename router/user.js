const express = require("express");
const upload= require("../utils/uploadFiles")
const router=express.Router();
const userController=require('../controler/userController')
router.post('/insertUser',upload.array("files",12),userController.insert)
router.get('/getUser',userController.getUser)
router.get('/getUserChat',userController.getUserChat)
router.get('/getUserEmail:email',userController.getUserEmail)
router.post('/updatepass',userController.updatepass);
router.post('/update',userController.update);
module.exports=router;