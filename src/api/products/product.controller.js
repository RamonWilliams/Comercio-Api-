const Product = require('./product.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const product = await Product.find().populate("departments")
        return res.json({
            status: 200,
            message: 'Recovered all products',
            data: {product }
        });
    } catch (error) {
        return next(setError(500, 'Failed all products'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id);
        if (!product) return next(setError(404, 'Product not found'))
        return res.json({
            status: 200,
            message: 'Recovered  products by Id',
            data: {  product }
        });
    } catch (error) {
        return next(setError(500, 'Failed product'))
    }
}
const getByName = async (req,res,next) =>{
    try {
        const {name} = req.params;
        const  product = await Product.find({name:name})
        if (!product) return next(setError(404, 'Product not found'))
        return res.json({
            status: 200,
            message: 'Recovered  products by Name',
            data: {  product }
        });
    } catch (error) {
        return next(setError(500, 'Failed product by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const productTo = new Product(req.body)
        const productInBd = await productTo.save()
        return res.json({
            status: 201,
            message: 'Created new product',
            data: { productInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created product'))
    }
}
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const product = new Product(req.body);
        product._id = id;
        const updatedProduct = await Product.findByIdAndUpdate(id, product)
        if (!updatedProduct) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated product by id',
            data: {  updatedProduct }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated product'));
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const removedProduct = await Product.findByIdAndDelete(id)
        if (!removedProduct) return next(setError(404, 'product not found'))
        return res.json({
            status: 200,
            message: 'removed product',
            data: {  removedProduct }
        });
    } catch (error) {
        return next(setError(500, 'Failed removed product'));
    }
}




module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getByName
      
}