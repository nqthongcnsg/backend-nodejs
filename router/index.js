const product = require("./product");
const size = require("./size");
const cart = require("./cart");
const user = require("./user");
const chat = require("./chat")
const brand = require("./brand");
const category = require("./category");
const discount = require("./discount");
const type= require("./type")
const order=require("./oder")
const warehouse=require("./warehouse")
const admin =require("./admin")
function routes(app){
  
    app.use("/product", product);
    app.use("/size", size);
    app.use("/cart", cart);
    app.use("/user",user);
    app.use("/chat",chat);
    app.use("/brand", brand);
    app.use("/categories", category);
    app.use("/discount",discount);
    app.use("/type",type);
    app.use("/order",order);
    app.use("/warehouse",warehouse);
    app.use("/admin",admin);
}

module.exports= routes;