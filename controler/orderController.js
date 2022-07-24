const connection =require("../models/dbConnect");
const dbConnect=require("../models/dbConnect");
const sendmail = require("../service/sendmail");

class cartController{
    getAll(req,res,next){

        try {
           
            const query= "select * from hoadon";
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
    getodertrangthai(req,res,next){
        if(req.body){
        try {
           
            const query= "select * from hoadon where email=? and trangthai=?";
            const values= [req.body.email,req.body.trangthai];
            console.log(req.body);
            dbConnect.query(query, values, (error, result)=>{
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
    getodertrangthaiadmin(req,res,next){
        if(req.body){
        try {
           
            const query= "select * from hoadon where trangthai=?";
            const values= [req.body.trangthai];
            console.log(req.body);
            dbConnect.query(query, values, (error, result)=>{
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
    getDetail(req,res,next){
        const id= req.params.mahd;
        try {
           
            const query= "select * from chitiethd join product on chitiethd.idProduct = product.idProduct join hoadon on chitiethd.mahd=hoadon.mahd  where chitiethd.mahd=?";
            dbConnect.query(query, [id], (error, result)=>{
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
    updatetrangthai(req,res,next){
       
        if(req.body){
            try {
             
                const query= "update hoadon set trangthai=? where mahd=?";
               
            
           
                const values= [req.body.trangthai,req.body.mahd];
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
    addOrder(req,res,next){
       
        if(req.body){
            try {
             
                const query= "insert into hoadon(mahd,email,ngayhd,tennguoinhan,diachinguoinhan,ngaynhan,dienthoai,trangthai,thanhtoan) values(?,?,?,?,?,?,?,?,?)";
               
            
           
                const values= [req.body.mahd, req.body.email, req.body.dateStart, req.body.name, req.body.address,req.body.dateend,req.body.phone,req.body.trangthai,req.body.thanhtoan];
                
                dbConnect.query(query, values, (error, result)=>{
                    if(error) throw error
                    if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                    return res.json({"success": false, message:"unable to insert data"})                })
          
            } catch (error) {
                throw error
            } finally{
            }
        }else{
            return res.status(500).json({"success": false, message: "data invalid"})
        }
    }
    addDetail(req,res,next){
       
        if(req.body){
            try {
             
                const query= "insert into chitiethd(mahd,idProduct,soluong,gia,size) values(?,?,?,?,?)";
                
                const values= [req.body.mahd, req.body.idProduct, req.body.soluong, req.body.gia, req.body.size];
               
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
    getOrder(req,res,next){
        const id= req.params.email;
        try {
           
            const query= "select * from hoadon where email = ?";
            dbConnect.query(query, [id], (error, result)=>{
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
    updatethanhtoan(req,res,next){
       
        if(req.body){
            try {
             
                const query= "update chitiethd set gia=0 where mahd=?";
               
            
           
                const values= [req.body.mahd];
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
    getHoadon(req,res,next){
        const id= req.params.mahd;
        try {
           
            const query= "select * from hoadon join chitiethd on hoadon.mahd=chitiethd.mahd join product on chitiethd.idProduct=product.idProduct where hoadon.mahd=?";
            connection.query(query,[id], (error, result)=>{
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

module.exports=new cartController();