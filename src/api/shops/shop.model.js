const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    date: { type: String, required: true },   
    images: { type: String },   
    directors:{type:Schema.Types.ObjectId,ref:"directors"},   
    departments:[{ type:Schema.Types.ObjectId, ref:"departments"}], 
        
    

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('shops', schema);
