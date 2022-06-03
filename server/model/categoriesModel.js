const mongoose = require('mongoose')

const categoriesSchema = mongoose.Schema({

    user:{

        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    },
    image:{
        type: String,
        required: [true,'please add a text value']
    }
},{

    timestamps:true

})

module.exports = mongoose.model('Categorie',courseSchema)