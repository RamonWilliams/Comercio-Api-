const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    age: { type: Number, required: true },   
    images: { type: String, },      
    shops: { type:Schema.Types.ObjectId, ref:"shops"}, 

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('directors', schema);