const connection =require("../models/dbConnect");
const dbConnect=require("../models/dbConnect");

class wareHouseController{
    insert(req,res,next){
        if(req.body){
            try{
                const sql="insert into kho(idProduct,soluong) value(?,?) "
                const values= [req.body.id,req.body.soluong]
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
    update(req,res,next){
        if(req.body){
            try{
                const sql="update  kho set soluong=? where idProduct=? "
                const values= [req.body.soluong,req.body.id]
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
    getWarehouse(req,res,next){
     
      
        try {
            const sql="select * from kho join product on kho.idProduct=product.idProduct";
            connection.query(sql, (error, result)=>{
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
    gettonkho(req,res,next){
        const id=req.params.id;
      
        try {
            const sql="select * from kho join product on kho.idProduct=product.idProduct where kho.idProduct=?";
            dbConnect.query(sql, [id], (error, result)=>{
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
    deleteProductWarehouse(req,res,next){
        const id=req.params.id;
      
        try {
            const sql="delete from kho where idProduct=?";
            dbConnect.query(sql, [id], (error, result)=>{
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
    deleteProductNumber(req,res,next){
        const id=req.params.id;
      
        try {
            const sql="update kho set soluong = 0 where idProduct=?";
            dbConnect.query(sql, [id], (error, result)=>{
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

module.exports=new wareHouseController();