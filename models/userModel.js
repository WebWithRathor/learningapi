const mongoose = require('mongoose')
const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Nam is required"],
        minLength:[6,"Name must be at least 6 characters."],
        trim:true
    },
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[6,"username must be at least 6 characters."],
        trim:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    gender:{
        type:String,
        required:[true,"gender is required"],
        enum:["male", "female","custom"],
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[6,"password must be at least 6 characters."],
        maxLength:[15,"password must be at atmost 15 characters."],
    }
})

module.exports= mongoose.model('user',userModel)