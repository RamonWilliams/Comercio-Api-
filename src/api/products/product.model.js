const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    price: { type: Number, required: true },   
    images: { type: String, },   
    departments: { type:Schema.Types.ObjectId, ref:"departments"},
  
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('products', schema);