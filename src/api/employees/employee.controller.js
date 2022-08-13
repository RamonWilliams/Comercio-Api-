const Employee = require('./employee.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const employee = await Employee.find().populate("shops departments")
        return res.json({
            status: 200,
            message: 'Recovered all employees',
            data: {employee }
        });
    } catch (error) {
        return next(setError(500, 'Failed all employees'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const employee = await Employee.findById(id);
        if (!employee) return next(setError(404, 'Employee not found'))
        return res.json({
            status: 200,
            message: 'Recovered  employees by Id',
            data: {  employee }
        });
    } catch (error) {
        return next(setError(500, 'Failed employee'))
    }
}
const getByName = async (req,res,next) =>{
    try {
        const {name} = req.params;
        const employee = await Employee.find({name:name})
        if (!employee) return next(setError(404, 'Employee not found'))
        return res.json({
            status: 200,
            message: 'Recovered  employees by Name',
            data: {  employee }
        });
    } catch (error) {
        return next(setError(500, 'Failed employee by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const employeeTo = new Employee(req.body)
        const employeeInBd = await employeeTo.save()
        return res.json({
            status: 201,
            message: 'Created new employee',
            data: { employeeInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created employee'))
    }
}
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const employee = new Employee(req.body);
        employee._id = id;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, employee)
        if (!updatedEmployee) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated employee by id',
            data: {  updatedEmployee }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated employee'));
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const removedEmployee = await Employee.findByIdAndDelete(id)
        if (!removedEmployee) return next(setError(404, 'employee not found'))
        return res.json({
            status: 200,
            message: 'removed employee',
            data: {  removedEmployee }
        });
    } catch (error) {
        return next(setError(500, 'Failed removed employee'));
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