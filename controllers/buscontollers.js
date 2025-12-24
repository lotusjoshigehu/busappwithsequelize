const {Users,Buses,Booking,Payments}=require("../models/busmodels")
const {Op}=require("sequelize")
const adduserentries= async (req,res)=>
{
    try {
        const {id,name,email}=req.body
        const users=await Users.create({
            id:id,
            name:name,
            email:email
        })
        res.status(201).send("data inserted sucessfully")
        
    } catch (error) {
        console.log(error)
        
    }
}

const addbusesentries= async (req,res)=>
{
    try {
    const {id,busNumber,totalSeats,availableSeats}=req.body
    const buses= await Buses.create({
        id:id,
        busNumber:busNumber,
        totalSeats:totalSeats,
        availableSeats:availableSeats
    })
    res.status(201).send("buses data inserted sucesssfuly")
    } catch (error) {
        console.log(error)
    }
    
}

const getusers=async(req,res)=>
{
    const allusers=await Users.findAll()
    res.status(200).send(allusers)
}

const getseats=async (req,res)=>
{

    const seats= await Buses.findAll({
        where:
        {
            availableSeats:
            {
                [Op.gt]:10
            }
        }
    })
    res.status(200).send(seats)
}

const getavailseats=async(req,res)=>
{
    const {seats}=req.params
    const totalavailableseats= await Buses.findAll({
        where:
        {
            availableSeats:
            {
                [Op.gt]:Number(seats)
            }
        }
    })
    res.status(200).send(totalavailableseats)
}
module.exports=
{
    adduserentries,
    addbusesentries,
    getusers,
    getseats,
    getavailseats
}