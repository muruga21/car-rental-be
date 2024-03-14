const express = require('express')
const cors = require('cors') 
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')  
const adminRoutes = require('./routes/adminRoutes')
const mongoose = require("mongoose")
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const saltRounds = 10;

app.listen(5000,()=>{
    console.log("server running on port 5000");
})

try{
    const connect = async() =>{
        await mongoose.connect("mongodb+srv://Kishore:bk_sensei@mern.d6qyuyj.mongodb.net/?retryWrites=true&w=majority&appName=Mern")
        console.log("db connected")   
    }
    connect();
}
catch(err){
    console.log(err.message)
}

app.use('/users',userRoutes)
app.use('/admin',adminRoutes)

app.get('/hello',async (req, res)=>{
    let Ghash = ""
    await bcrypt.hash("muruga", saltRounds).then(function(hash) {
        Ghash = hash
        console.log(Ghash)
    });
    await bcrypt.compare("muruga", Ghash).then(function(result) {
        console.log(Ghash)
        res.status(200).json({message:{result}})
    });
    return
})