const Director = require('./director.model');
const { setError } = require('../../helpers/utils');

const getAll = async (req, res, next) => {
    try {
        const director = await Director.find().populate("shops")
        return res.json({
            status: 200,
            message: 'Recovered all directors',
            data: {director }
        });
    } catch (error) {
        return next(setError(500, 'Failed all directors'));
    }
}

const getById = async (req, res, next) => {
    try {
        const { id } = req.params
        const director = await Director.findById(id);
        if (!director) return next(setError(404, 'Director not found'))
        return res.json({
            status: 200,
            message: 'Recovered directors by Id',
            data: {  director }
        });
    } catch (error) {
        return next(setError(500, 'Failed director'))
    }
}
const getByName = async (req,res,next) =>{
    try {
        const {name} = req.params;
        const director = await Director.find({name:name})
        if (!director) return next(setError(404, 'Director not found'))
        return res.json({
            status: 200,
            message: 'Recovered  directors by Name',
            data: {  director }
        });
    } catch (error) {
        return next(setError(500, 'Failed director by name'))
    }
}

const create = async (req, res, next) => {
    try {
        const directorTo = new Director(req.body)
        const directorInBd = await directorTo.save()
        return res.json({
            status: 201,
            message: 'Created new director',
            data: { directorInBd }
        });
    } catch (error) {
        return next(setError(500, 'Failed created director'))
    }
}
const update = async (req, res, next) => {
    try {
        const { id } = req.params
        const director = new Director(req.body);
        director._id = id;
        const updatedDirector = await Director.findByIdAndUpdate(id, director)
        if (!updatedDirector) return next(setError(404, 'Code not found'))
        return res.json({
            status: 201,
            message: 'Updated director by id',
            data: {  updatedDirector }
        });
    } catch (error) {
        return next(setError(500, 'Failed updated director'));
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params
        const removedDirector = await Director.findByIdAndDelete(id)
        if (!removedDirector) return next(setError(404, 'director not found'))
        return res.json({
            status: 200,
            message: 'removed director',
            data: {  removedDirector }
        });
    } catch (error) {
        return next(setError(500, 'Failed removed director'));
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