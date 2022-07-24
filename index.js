const express= require("express")
const app= express()
const path= require('path')
const port= 5000 
const routes= require("./router/index")
const cors= require("cors")
app.use(express.json())
app.use(cors());
routes(app);
app.use('/uploads',express.static("uploads"))
app.use(express.static(path.join(__dirname,'build')))
app.get("/*", (req, res)=> {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(process.env.PORT || port, ()=>{
    console.log("server listen on port "+ port);
})
