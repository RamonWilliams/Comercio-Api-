const Shop = require('./shop.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const shop = await Shop.find().populate("departments ")
        return res.json({
            status: 200,
            message: 'Recovered all shops',
            data: {shop }
        });
    } catch (error) {
        return next(setError(500, 'Failed all shops'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const shop = await Shop.findById(id);
        if (!shop) return next(setError(404, 'Shop not found'))
        return res.json({
            status: 200,
            message: 'Recovered  shops by Id',
            data: {  shop }
        });
    } catch (error) {
        return next(setError(500, 'Failed shop'))
    }
}
const getByName = async (req,res,next) =>{
    try {
        const {name} = req.params;
        const  shop = await Shop.find({name:name})
        if (!shop) return next(setError(404, 'Shop not found'))
        return res.json({
            status: 200,
            message: 'Recovered  shops by Name',
            data: {  shop }
        });
    } catch (error) {
        return next(setError(500, 'Failed shop by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const shopTo = new Shop(req.body)
        const shopInBd = await shopTo.save()
        return res.json({
            status: 201,
            message: 'Created new shop',
            data: { shopInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created shop'))
    }
}
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const shop = new Shop(req.body);
        shop._id = id;
        const updatedShop = await Shop.findByIdAndUpdate(id, shop)
        if (!updatedShop) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated shop by id',
            data: {  updatedShop }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated shop'));
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const removedShop = await Shop.findByIdAndDelete(id)
        if (!removedShop) return next(setError(404, 'shop not found'))
        return res.json({
            status: 200,
            message: 'removed shop',
            data: {  removedShop }
        });
    } catch (error) {
        return next(setError(500, 'Failed removed shop'));
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