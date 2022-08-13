const Department = require('./department.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const department = await Department.find().populate("products")
        return res.json({
            status: 200,
            message: 'Recovered all departments',
            data: {department }
        });
    } catch (error) {
        return next(setError(500, 'Failed all departments'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const department = await Department.findById(id);
        if (!department) return next(setError(404, 'Department not found'))
        return res.json({
            status: 200,
            message: 'Recovered Departments by Id',
            data: {  department }
        });
    } catch (error) {
        return next(setError(500, 'Failed department'))
    }
}
const getByName = async (req,res,next) =>{
    try {
        const {name} = req.params;
        const department = await Department.find({name:name})
        if (!department) return next(setError(404, 'Department not found'))
        return res.json({
            status: 200,
            message: 'Recovered  departments by Name',
            data: {  department }
        });
    } catch (error) {
        return next(setError(500, 'Failed department by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const departmentTo = new Department(req.body)
        const departmentInBd = await departmentTo.save()
        return res.json({
            status: 201,
            message: 'Created new department',
            data: { departmentInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created department'))
    }
}
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const department = new Department(req.body);
        department._id = id;
        const updatedDepartment = await Department.findByIdAndUpdate(id, department)
        if (!updatedDepartment) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated departament by id',
            data: {  updatedDepartment }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated department'));
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const removedDepartment = await Department.findByIdAndDelete(id)
        if (!removedDepartment) return next(setError(404, 'department not found'))
        return res.json({
            status: 200,
            message: 'removed department',
            data: {  removedDepartment }
        });
    } catch (error) {
        return next(setError(500, 'Failed removed department'));
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