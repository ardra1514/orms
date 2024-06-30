const mongoose = require('mongoose')

const categoryschema = new mongoose.Schema({
    category:String,
    stus:{
        type:String ,
        default:'pending'
    },
    role:{
            type:String,
            default:'visitor'
    }

})
    const categorymodels = mongoose.model('categories',categoryschema)
    //users=collection name

    module.exports = categorymodels