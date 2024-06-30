const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name:String,
    email:String,
    department:String,
    year:String,
    password:String ,
    isadmin:{
        type:Boolean,
        default:false
    },
    isfaculty:{
        type:Boolean,
        default:false
    },
    seennotification:{
        type:Array,
        default:[],
    },
    unseennotification:{
        type:Array,
        default:[],
    },
    role:{
            type:String,
            default:'visitor'
            


    },
    stus:{
        type:String ,
        default:'pending'
    },

})
    const usermodels = mongoose.model('users',userschema)
    //users=collection name

    module.exports = usermodels