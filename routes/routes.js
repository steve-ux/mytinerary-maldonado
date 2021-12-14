require("../config/database");
const Router = require("express").Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariosControllers = require("../controllers/itinerariosControllers");
const validator = require("../config/validator");
const userControllers = require("../controllers/userControllers");
const passport=require("../config/passport")

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

const { newUser, logIn, authUser } = userControllers;

Router.route("/cities").get(getCities).post(addCity);

Router.route("/city/:id").get(getCity).delete(deleteCity).put(modifyCity);

Router.route("/itinerarios").get(getItinerarios).post(addItinerario);

Router.route("/city/itinerary/:id")
  .get(getItinerarioCity)
  .delete(deleteItinerario)
  .put(modifyItinerario);

Router.route("/itinerary/:id").get(getItinerario);

Router.route("/auth/signUp").post(validator, newUser);

Router.route("/auth/logIn").post(logIn);

Router.route("/user/auth").get(passport.authenticate("jwt", {session:false}), authUser);

module.exports = Router;
