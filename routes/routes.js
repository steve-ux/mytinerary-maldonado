const Router = require("express").Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariosControllers = require("../controllers/itinerariosControllers");

const { getCities, addCity, getCity, deleteCity, modifyCity } =
  citiesControllers;
const {
  getItinerarios,
  addItinerario,
  getItinerario,
  deleteItinerario,
  modifyItinerario,
  getItinerarioCity,
} = itinerariosControllers;

Router.route("/cities").get(getCities).post(addCity);

Router.route("/city/:id").get(getCity).delete(deleteCity).put(modifyCity);

Router.route("/itinerarios").get(getItinerarios).post(addItinerario);

Router.route("/city/itinerary/:id")
  .get(getItinerarioCity)
  .delete(deleteItinerario)
  .put(modifyItinerario);

Router.route("/itinerary/:id").get(getItinerario);

module.exports = Router;
