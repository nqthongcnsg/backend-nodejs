const connection =require("../models/dbConnect");
const dbConnect=require("../models/dbConnect");

class userController{
    insert(req,res,next){
        if(req.files &&req.body){
            try{
                const sql="insert into user(email,matkhau,ten,diachi,dienthoai,avatar) value(?,?,?,?,?,?) "
                var images= {images:[]};
                for(let i=0; i<req.files.length;i++){
                    images.images[i]= req.files[i].path;
                }
                var imagesJSON= JSON.stringify(images);
                console.log(imagesJSON);
                const values= [req.body.email,req.body.pass,req.body.name,req.body.address,req.body.phone,imagesJSON]
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
    getUser(req,res,next){
     
      
        try {
            const sql="select * from user";
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
    getUserChat(req,res,next){
     
      
        try {
            const sql="SELECT DISTINCT user.email,user.ten from user join chat on user.email=chat.idAcount ORDER BY user.email";
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
    getUserEmail(req,res,next){
        const email=req.params.email;
      
        try {
            const sql="select * from user where email=?";
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
    updatepass(req,res,next){
        if(req.body){
            try{
                const sql="update user set matkhau=? where email=? "
               
                const values= [req.body.matkhau,req.body.email]
                    dbConnect.query(sql, values, (error, result)=>{
                        if(error) throw error
                        if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                        return res.json({"success": false, message:"unable to update data"})
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
                const sql="update user set ten=?, diachi=?,dienthoai=? where email=? "
               
                const values= [req.body.ten,req.body.diachi,req.body.phone,req.body.email]
                    dbConnect.query(sql, values, (error, result)=>{
                        if(error) throw error
                        if(result.affectedRows>0) return res.json({"success": true, message: "successful"})
                        return res.json({"success": false, message:"unable to update data"})
                    })
            }catch(error){
                throw error
            }
        }
        else{
            return res.status(500).json({"success": false, message: "data invalid"})
        }
    }

}

module.exports=new userController();