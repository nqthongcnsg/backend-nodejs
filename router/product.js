const express = require("express");
const upload= require("../utils/uploadFiles")
const router=express.Router();
const productController= require("../controler/productController");
router.get("/getAll",productController.getAll);
router.get("/getProductSeach/:key",productController.getProductSeach);
router.get("/getProductLimit",productController.getProductLimit);
router.get("/getProduct/:id",productController.getById);
router.get("/getProductType/:type",productController.getProductType);
router.post("/add", upload.array("files",12), productController.addProduct)
router.post("/update", upload.array("files",12), productController.updateProduct)
router.delete("/delete:id", productController.deleteById)
module.exports=router;