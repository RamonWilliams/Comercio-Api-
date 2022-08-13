const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },        
    products:[{type:Schema.Types.ObjectId,ref:"products"}],
    shops:{type:Schema.Types.ObjectId,ref:"shops"}


},
    {
    timestamps: true
    }
);

module.exports = mongoose.model('departments', schema);