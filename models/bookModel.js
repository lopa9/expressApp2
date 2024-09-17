const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    title :{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        reuired:true
    }
});

const BookModel =mongoose.model('Book',bookSchema);
module.exports =BookModel;