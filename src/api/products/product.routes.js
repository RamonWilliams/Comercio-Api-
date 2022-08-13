const ProductRoutes = require('express').Router();
const {
    getAll,
    getById,    
    create,
    update,
    remove,
    getByName
     } = require('./product.controller');

ProductRoutes.get('/', getAll)
ProductRoutes.get('/:id', getById)
ProductRoutes.get('/name/:name', getByName)
ProductRoutes.post('/', create)
ProductRoutes.patch('/:id', update)
ProductRoutes.delete('/:id', remove)
module.exports = ProductRoutes 