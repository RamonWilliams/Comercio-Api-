const ShopRoutes = require('express').Router();
const {
    getAll,
    getById,    
    create,
    update,
    remove,
    getByName
     } = require('./shop.controller');

ShopRoutes.get('/', getAll)
ShopRoutes.get('/:id', getById)
ShopRoutes.get('/name/:name', getByName)
ShopRoutes.post('/', create)
ShopRoutes.patch('/:id', update)
ShopRoutes.delete('/:id', remove)
module.exports = ShopRoutes 