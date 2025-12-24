const express=require("express")
const app=express()
const busroutes=require("./routes/busroutes")
const db =require("./connection/busconnection")
app.use(express.json())

app.use(busroutes)

db.sync({force:true}).then(()=>
{
  app.listen(3000,(err)=>
{
    console.log("server is running")
})
})
.catch((err)=>
{
   console.log(err)
})