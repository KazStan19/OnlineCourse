const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({

    user:{

        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'

    },
    image:{
        data: Buffer,
        contentType: String
        
    },categorie:{

        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Categorie'

    },


},{

    timestamps:true

})

module.exports = mongoose.model('Courses',courseSchema)