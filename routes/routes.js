const Router = require('express').Router();
const citiesControllers=require('../controllers/citiesControllers')

const { getCities, addCity, getCity, deleteCity, modifyCity } = citiesControllers

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/city/:id')
.get(getCity)
.delete(deleteCity)
.put(modifyCity)

module.exports = Router;