const connection =require("../models/dbConnect");
const dbConnect=require("../models/dbConnect");
class chatController{
    getAll(req,res,next){
        const email=req.params.email;
         try {
          
             const query= "select * from chat where idAcount = ? ";
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
     addChat(req,res,next){
        try{
            const sql="insert into chat(id,idAcount,message,time,type,success,trangthai) values ( ?,?,?,?,?,?,?)" ;
            let data=[req.body.id,req.body.idAcount,req.body.message,req.body.time,req.body.type,req.body.success,req.body.trangthai];

            console.log(data)
            dbConnect.query(sql, data, (error, result)=>{
                if(error) throw error
                if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                return res.json({"success": false, message:"unable to insert data"})
            })

        }catch (error) {
             throw error
         }
     }
     getUserChat(req,res,next){
        const email=req.params.email;
      
        try {
            const sql="SELECT * FROM chat WHERE idAcount=? ";
            connection.query(sql,[email], (error, result)=>{
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
    updateTrangThaiChat(req,res,next){
        const email=req.params.email;
        try{
            var trangthai1="Đã xem";
            var trangthai2="Chưa xem";

            const sql="update chat set trangthai = ? where idAcount=? and trangthai=?" ;
            const data=[trangthai1,email,trangthai2];
            console.log(data)
            dbConnect.query(sql, data, (error, result)=>{
                if(error) throw error
                if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                return res.json({"success": false, message:"unable to insert data"})
            })

        }catch (error) {
             throw error
         }
     }

}
module.exports=new chatController();