const {Sequelize,DataTypes}=require("sequelize")

const busequelize=require("../connection/busconnection")

const Users=busequelize.define("Users",{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:
    {
       type:DataTypes.STRING,
       allowNull:false
    },
    email:
    {
      type:DataTypes.STRING,
      allowNull:false
    }
})

const Buses=busequelize.define("Buses",{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    busNumber:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    },
    totalSeats:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    },
    availableSeats:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    }  
})

const Booking=busequelize.define("Booking",{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    seatNumber:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    },  
})

const Payments=busequelize.define("Payments",{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    amountPaid:
    {
       type:DataTypes.INTEGER,
       allowNull:false
    },
    paymentStatus:
    {
       type:DataTypes.STRING,
       allowNull:false
    },
})

module.exports=
{
    Users,
    Payments,
    Buses,
    Booking
}