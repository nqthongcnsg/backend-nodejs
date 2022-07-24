const connection =require("../models/dbConnect");
const dbConnect=require("../models/dbConnect");
const generateID = require("../utils/generateID");
class discountController{
    getAll(req,res,next){
       
        try {
            const query= "select * from discount";
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
    getid(req,res,next){
       
        try {
            
        const mant= req.params.id;
            const query= "select * from discount where idDiscount=?";
            connection.query(query, [mant], (error, result)=>{
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
    deleteId(req,res,next){
        const mant= req.params.id;
        if(!mant) res.json({success: false, message: "missing id"})
        try {
            const query= "delete from discount where idDiscount=?";
            connection.query(query, [mant], (error, result)=>{
                if(error) throw error
                if(result.affectedRows>0) return res.json({success: true, message:"delete successful"})
                return res.json({success: false, message: "data not found. Delete not successful"})
            })
        } catch (error) {
            throw error
        }
    }
    addDiscount(req,res,next){
     
        console.log('values')
        try {
            const query= "insert into discount(idDiscount,nameDiscount) values (?,?)";
            const id= generateID(6);
            var values=[id,req.body.name];
            console.log(values)
            connection.query(query, values, (error, result)=>{
                if(error) throw error
                if(result.affectedRows>0) return res.json({success: true, message:"add successful"})
                return res.json({success: false, message: "data not found. add not successful"})
            })
        } catch (error) {
            throw error
        }
    }
    updateDiscount(req,res,next){
     
        console.log('values')
        try {
            const query= "update discount set nameDiscount=? where idDiscount=?";
     
            var values=[req.body.name,req.body.id];
            console.log(values)
            connection.query(query, values, (error, result)=>{
                if(error) throw error
                if(result.affectedRows>0) return res.json({success: true, message:" update successful"})
                return res.json({success: false, message: "data not found. update not successful"})
            })
        } catch (error) {
            throw error
        }
    }
    

}

module.exports=new discountController();