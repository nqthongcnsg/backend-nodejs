const connection =require("../models/dbConnect");
const dbConnect=require("../models/dbConnect");
const generateID = require("../utils/generateID");
class brandController{
    getAll(req,res,next){
       
        try {
            const query= "select * from brand";
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
            const query= "select * from brand where idBrand=?";
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
            const query= "delete from brand where idBrand=?";
            connection.query(query, [mant], (error, result)=>{
                if(error) throw error
                if(result.affectedRows>0) return res.json({success: true, message:"delete successful"})
                return res.json({success: false, message: "data not found. Delete not successful"})
            })
        } catch (error) {
            throw error
        }
    }
    addBrand(req,res,next){
     
        console.log('values')
        try {
            const query= "insert into brand(idBrand,nameBrand) values (?,?)";
            const id= generateID(6);
            var values=[id,req.body.name];
            console.log(values)
            connection.query(query, values, (error, result)=>{
                if(error) throw error
                if(result.affectedRows>0) return res.json({success: true, message:"delete successful"})
                return res.json({success: false, message: "data not found. Delete not successful"})
            })
        } catch (error) {
            throw error
        }
    }
    updateBrand(req,res,next){
     
        console.log('values')
        try {
            const query= "update brand set nameBrand=? where idBrand=?";
     
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

module.exports=new brandController();