const DirectorRoutes = require('express').Router();
const {
    getAll,
    getById,    
    create,
    update,
    remove,
    getByName
     } = require('./director.controller');

DirectorRoutes.get('/', getAll)
DirectorRoutes.get('/:id', getById)
DirectorRoutes.get('/name/:name', getByName)
DirectorRoutes.post('/', create)
DirectorRoutes.patch('/:id', update)
DirectorRoutes.delete('/:id', remove)
module.exports = DirectorRoutes 