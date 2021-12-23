require("../config/database");
const Router = require("express").Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariosControllers = require("../controllers/itinerariosControllers");
const activitiesControllers = require("../controllers/activitiesControllers");
const validator = require("../config/validator");
const userControllers = require("../controllers/userControllers");
const passport = require("../config/passport");

const { getCities, addCity, getCity, deleteCity, modifyCity } =
  citiesControllers;
const {
  getItinerarios,
  addItinerario,
  getItinerario,
  deleteItinerario,
  modifyItinerario,
  getItinerarioCity,
  addOrRemoveLike,
  controlComment,
} = itinerariosControllers;

const { addActivity, getActivitiesOfOneItinerary } = activitiesControllers;

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

Router.route("/user/auth").get(
  passport.authenticate("jwt", { session: false }),
  authUser
);

Router.route("/itinerary/like/:id").put(
  passport.authenticate("jwt", { session: false }),
  addOrRemoveLike
);

Router.route("/itinerary/comments/:id")
.put(passport.authenticate("jwt", { session: false }), controlComment);

Router.route("/activities/:itineraryId")
.get(getActivitiesOfOneItinerary);

Router.route("/activities")
.post(addActivity);


module.exports = Router;
