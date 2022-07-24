const express = require("express");
const router=express.Router();
const warehouse=require('../controler/warehouseController')
router.post('/insert',warehouse.insert)
router.post('/update',warehouse.update)
router.get('/getAll',warehouse.getWarehouse)
router.get('/gettonkho:id',warehouse.gettonkho)
router.get('/deleteProductWarehouse:id',warehouse.deleteProductWarehouse)
router.get('/deleteProductNumber:id',warehouse.deleteProductNumber)

module.exports=router;