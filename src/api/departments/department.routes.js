const Department = require('express').Router();
const {
    getAll,
    getById,    
    create,
    update,
    remove,
    getByName
     } = require('./department.controller');

Department.get('/', getAll)
Department.get('/:id', getById)
Department.get('/name/:name', getByName)
Department.post('/', create)
Department.patch('/:id', update)
Department.delete('/:id', remove)
module.exports = Department 