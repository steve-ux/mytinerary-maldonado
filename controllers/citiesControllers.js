const Ciudad = require("../models/Ciudad");

const citiesControllers = {
  getCities: async (req, res) => {
    let cities;
    let error = null;
    try {
      cities = await Ciudad.find();
    } catch (error) {
      error = error;
      console.error(error);
    }

    res.json({
      respuesta: error ? "ERROR" : cities,
      success: error ? false : true,
      error: error,
    });
  },

  addCity: (req, res) => {
    const { city, image, country } = req.body;
    new Ciudad({ city, image, country })
      .save()
      .then((response) => res.json({ response }));
  },

  getCity: async (req, res) => {
    let cities;
    const id = req.params.id;
    try {
      //findOne busca un elemento de un array según el parámetro que le pasemos
      cities = await Ciudad.findOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
    res.json({ respuesta: cities, success: true });
  },

  deleteCity: async (req, res) => {
    let city;
    const id = req.params.id;
    try {
      city = await Ciudad.findOneAndDelete({ _id: id });
    } catch (error) {
      console.log(error);
    }
    res.json({ response: city });
  },

  modifyCity: async (req, res) => {
    let id = req.params.id;
    let cities = req.body;
    let actualizado;
    try {
      actualizado = await Ciudad.findOneAndUpdate({ _id: id }, cities, {
        new: true,
      });
    } catch (error) {
      console.log(error);
    }
    res.json({ success: actualizado ? true : false });
  },
};

module.exports = citiesControllers;
