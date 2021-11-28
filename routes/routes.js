const Router = require('express').Router();
const citiesControllers=require('../controllers/citiesControllers')

const { obtenerCities, postCities, obtenerUnaCity } = citiesControllers

Router.route('/cities')
.get(obtenerCities)
.get(postCities)

Router.route('/city/:id')
.get(obtenerUnaCity)

module.exports = Router;