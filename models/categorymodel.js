const mongoose = require('mongoose')

const categoryschema = new mongoose.Schema({
    category:String,
    role:{
            type:String,
            default:'visitor'
            


    }
})
    const categorymodels = mongoose.model('categories',categoryschema)
    //users=collection name

    module.exports = categorymodels