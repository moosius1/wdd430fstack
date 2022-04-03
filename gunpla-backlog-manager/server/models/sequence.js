const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
    
    maxKitId: {type: String},
 });
 
 module.exports = mongoose.model('Sequence', sequenceSchema);