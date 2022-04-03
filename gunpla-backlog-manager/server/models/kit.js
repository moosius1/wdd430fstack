const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    purchaseDate: { type: String },
    score: { type: String },
    imageUrl: { type: String },
    buildStatus: {type:String}
 });
 
 module.exports = mongoose.model('Kits', contactSchema);