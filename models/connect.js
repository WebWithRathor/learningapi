const mongoose = require('mongoose');


exports.monogoConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')
    }
    catch(err){
        console.log(err.message)
    }
}