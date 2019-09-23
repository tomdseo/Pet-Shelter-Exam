const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({ //!!Schema in Mongoose is a structure for each Document
    name: {type: String, required: [true, "Name Required"], unique: [true, "Name Already Taken"], minlength: [3, "Name Requires Minimum of 3 Characters"]},
    type: {type: String, required: [true, "Type Required"], minlength: [3, "Type Requires Minimum of 3 Characters"]},
    description: {type: String, required: [true, "Description Required"], minlength: [3, "Description Requires Minimum of 3 Characters"]},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {type: Number, default: 0}
}, {timestamps: true }); //.....................adds "createdAt" and "updatedAt" properties

const PetModel = mongoose.model('PetDocument', PetSchema);