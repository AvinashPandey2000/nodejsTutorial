 // steps 1:mongoose ko import kiya
const mongoose = require('mongoose');

// steps 2: make the schema
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    phone:{
        type:String,
        required : true
    }
});

//step 3: export he connection so that we can use this in other file
const Contact = mongoose.model('Contact',contactSchema);
module.exports =Contact;
