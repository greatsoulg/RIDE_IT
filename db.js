const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://gems:testgems123@ems.rqlvk.mongodb.net/?retryWrites=true&w=majority&appName=EMS', 
    {  
        useUnifiedTopology: true,
        useNewUrlParser: true

    })

    const connection = mongoose.connection

    connection.on('connected', () =>{
        console.log("Connection Successfull")
    })

    connection.on('error', () =>{
        console.log("Connection error")
    })
}

connectDB ()

module.exports = mongoose
