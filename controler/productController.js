const connection =require("../models/dbConnect");
const { commit } = require("../models/dbConnect");
const dbConnect=require("../models/dbConnect");
const generateID = require("../utils/generateID")
class ProductController{
    getProductLimit(req,res,next){
        var searchTerm= req.params.searchTerm
        try {
            const query= "select * from product order by rand() limit 0,4";
            connection.query(query, (error, result)=>{
                if(error) throw error
                if(result.length>0){
                    
                    return res.json({success: true, message:"successful", result})
                }
                return res.json({success: false, message: "data not found"})
            })
        } catch (error) {
            throw error
        }
    }
    getProductType(req,res,next){
        const type= req.params.type;
        try {
            const query= "select * from product join categories on product.idCategories=categories.idCategories where product.idCategories = ? order by rand() limit 0,3";
            const data=[req.body.type];
            connection.query(query,[type], (error, result)=>{
                if(error) throw error
                if(result.length>0){
                    
                    return res.json({success: true, message:"successful", result})
                }
                return res.json({success: false, message: "data not found"})
            })
        } catch (error) {
            throw error
        }
    }
    getAll(req,res,next){
        var searchTerm= req.params.searchTerm
        try {
            const query= "select * from product join categories on product.idCategories=categories.idCategories";
            connection.query(query, (error, result)=>{
                if(error) throw error
                if(result.length>0){
                   
                    return res.json({success: true, message:"successful", result})
                }
                return res.json({success: false, message: "data not found"})
            })
        } catch (error) {
            throw error
        }
    }
    getProductSeach(req,res,next){
        var searchTerm= req.params.key
       let c= '%'+searchTerm+'%'
        try {
            const query= "select * from product where namProduct like ?";
            console.log(query)
            connection.query(query,[c], (error, result)=>{
                if(error) throw error
                if(result.length>0){
                   
                    return res.json({success: true, message:"successful", result})
                }
                return res.json({success: false, message: "data not found"})  
            })
        } catch (error) {
            throw error
        }
    }
    deleteById(req,res,next){
        const mant= req.params.id
        if(!mant) res.json({success: false, message: "missing id"})
        try {
            const query= "delete from product where idProduct=?"
            connection.query(query, [mant], (error, result)=>{
                if(error) throw error
                if(result.affectedRows>0) return res.json({success: true, message:"delete successful"})
                return res.json({success: false, message: "data not found. Delete not successful"})
            })
        } catch (error) {
            throw error
        }
    }
    addProduct(req,res,next){
       
        if(req.files && req.body){
            try {
                console.log('aaa');
                const query= "insert into product(idProduct,namProduct,priceOld,priceNew,idBrand,idCategories,idType,idDiscount,des,image) values(?,?,?,?,?,?,?,?,?,?)";
                const id= generateID(6);
                var images= {images:[]};
                for(let i=0; i<req.files.length;i++){
                    images.images[i]= req.files[i].path;
                }
                var imagesJSON= JSON.stringify(images);
                console.log(imagesJSON);
                const values= [id,req.body.name, req.body.priceOld, req.body.priceNew, req.body.brand, req.body.cate, req.body.type,req.body.dis,req.body.note,imagesJSON];
                console.log(values);
                dbConnect.query(query, values, (error, result)=>{
                    if(error) throw error
                    if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                    return res.json({"success": false, message:"unable to insert data"})
                })
            } catch (error) {
                throw error
            } finally{
            }
        }else{
            return res.status(500).json({"success": false, message: "data invalid"})
        }
    }
    updateProduct(req,res,next){
       
        if(req.body){
            try {
             
                let query='';
                var images= {images:[]};
                var imagesJSON='';
               let values=[];
          
                if(req.files.length >0){
                     query= "UPDATE product SET namProduct=?,priceOld=?,priceNew=?,idType=?,idDiscount=?,idBrand=?,idCategories=?,des=?,image=? WHERE idProduct=?";
                     for(let i=0; i<req.files.length;i++){
                        images.images[i]= req.files[i].path;
                    }
                  
                    imagesJSON = JSON.stringify(images);
                    values= [req.body.name, req.body.priceOld, req.body.priceNew,req.body.type,req.body.dis, req.body.brand, req.body.cate, req.body.note,imagesJSON,req.body.id];
                }
                else{
                   
                    query= "UPDATE product SET namProduct=?,priceOld=?,priceNew=?,idType=?,idDiscount=?,idBrand=?,idCategories=?,des=? WHERE idProduct=? ";
                   
                    values= [req.body.name, req.body.priceOld, req.body.priceNew,req.body.type,req.body.dis, req.body.brand, req.body.cate, req.body.note,req.body.id];
                } 
               
                 
               
               
                
               
                console.log(values);
                dbConnect.query(query, values, (error, result)=>{
                    if(error) throw error
                    if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                    return res.json({"success": false, message:"unable to insert data"})
                })
            } catch (error) {
                throw error
            } finally{
            }
        }else{
            return res.status(500).json({"success": false, message: "data invalid"})
        }
    }
    // /product/getById/:id
    //method: GET
    getById(req, res, next){
        const id= req.params.id;
        if(!id) return res.json({success: false, message: "ID is missing!"});
        try {
            const query= "select * from product where idProduct=?";
            dbConnect.query(query, [id], (error, result)=>{
                if(error) throw error
                if(result.length>0){
             
                    return res.json({success: true, message: "successful", result});

                }
                return res.json({success: false, message: "data not found"});
            })
        } catch (error) {
            throw error;
        }
       
  
    }
}
module.exports= new ProductController();