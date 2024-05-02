const mongoose = require('mongoose')

const facultyschema = new mongoose.Schema({
    name:String,
    email:String,
    department:String,
    year:String,
    subject:String ,
    content:String ,

   
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

    }

})
    const facultymodels = mongoose.model('req',facultyschema)

    module.exports = facultymodels