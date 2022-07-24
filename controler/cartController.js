const connection =require("../models/dbConnect");
const dbConnect=require("../models/dbConnect");
const SenMail=require("../service/sendmail")
class cartController{
    getAll(req,res,next){
       const email=req.params.email;
        try {
           
            const query= "select * from giohang join product on giohang.idProduct=product.idProduct  where email=? ";
            connection.query(query,[email], (error, result)=>{
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
    addCart(req,res,next){
        const id= req.params.id;
        if(req.body){
            try{
                //SenMail.sendMail(req.body.email);
                const sql="insert into giohang(idProduct,soluong,gia,size,email) value(?,?,?,?,?) "
                const values= [id, req.body.soluong, req.body.gia, req.body.size, req.body.email]
                    dbConnect.query(sql, values, (error, result)=>{
                        if(error) throw error
                        if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                        return res.json({"success": false, message:"unable to insert data"})
                    })
            }catch(error){
                throw error 
            }
        }
        else{
            return res.status(500).json({"success": false, message: "data invalid"})
        }
    }
    updateCart(req,res,next){
     
        if(req.body){
            try{
                const sql="update giohang set soluong = ?,size = ? where idProduct= ? and email = ? "
                const values= [req.body.soluong,req.body.size,req.body.idProduct, req.body.email]
                    dbConnect.query(sql, values, (error, result)=>{
                        if(error) throw error
                        if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                        return res.json({"success": false, message:"unable to insert data"})
                    })
            }catch(error){
                throw error
            }
        }
        else{
            return res.status(500).json({"success": false, message: "data invalid"})
        }
    }
    getById(req, res, next){
        const id= req.params.id;
        if(!id) return res.json({success: false, message: "ID is missing!"});
        try {
            const query= "select * from giohang join product on giohang.idProduct=product.idProduct where giohang.idProduct= ? and email = ?";
            const value=[id,req.body.email]
            dbConnect.query(query, value, (error, result)=>{
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
    deleteCart(req,res,next){
  
        if(req.body){
            try{
                const sql="delete from giohang where idProduct=? and email=?"
                const values= [req.body.idProduct,req.body.email]
                    dbConnect.query(sql, values, (error, result)=>{
                        if(error) throw error
                        if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                        return res.json({"success": false, message:"unable to insert data"})
                    })
            }catch(error){
                throw error
            }
        }
        else{
            return res.status(500).json({"success": false, message: "data invalid"})
            console.log("false")
        }
    }
    deleteCartPig(req,res,next){
        const email= req.params.email;
            try{
                const sql="delete from giohang where email=?"
               
                    dbConnect.query(sql, [email], (error, result)=>{
                        if(error) throw error
                        if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                        return res.json({"success": false, message:"unable to insert data"})
                    })
            }catch(error){
                throw error
            }
        
        
    }

}

module.exports=new cartController();