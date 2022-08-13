const EmployeeRoutes = require('express').Router();
const {
    getAll,
    getById,    
    create,
    update,
    remove,
    getByName
     } = require('./employee.controller');

EmployeeRoutes.get('/', getAll)
EmployeeRoutes.get('/:id', getById)
EmployeeRoutes.get('/name/:name', getByName)
EmployeeRoutes.post('/', create)
EmployeeRoutes.patch('/:id', update)
EmployeeRoutes.delete('/:id', remove)
module.exports = EmployeeRoutes 