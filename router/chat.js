
const express = require("express");
const router=express.Router();
const chat= require("../controler/chatController");
router.get('/getChat:email',chat.getAll);
router.post('/addChat',chat.addChat);
router.get('/getUserMess:email',chat.getUserChat);
router.post('/updateTrangThaiChat:email',chat.updateTrangThaiChat);

module.exports=router;