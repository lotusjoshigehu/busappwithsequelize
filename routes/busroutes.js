const express=require("express")
const buscontroller=require("../controllers/buscontollers")
const router=express.Router()


router.post("/users",buscontroller.adduserentries)
router.post("/buses",buscontroller.addbusesentries)
router.get("/users",buscontroller.getusers)
router.get("/seats",buscontroller.getseats)
router.get("/seats/available/:seats",buscontroller.getavailseats)
module.exports=router