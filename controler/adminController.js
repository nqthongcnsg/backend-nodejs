const connection =require("../models/dbConnect");
const dbConnect=require("../models/dbConnect");
const generateID = require("../utils/generateID");
class brandController{
    getAll(req,res,next){
       
        try {
            const query= "select * from quantri";
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
            const query= "select * from quantri";
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
  

}

module.exports=new brandController();