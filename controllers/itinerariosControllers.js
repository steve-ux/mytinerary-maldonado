const Itinerario = require("../models/Itinerario");

const itinerariosControllers = {
  getItinerarios: async (req, res) => {
    let itinerarios;
    let error = null;
    try {
      itinerarios = await Itinerario.find().populate('cityID');
    } catch (error) {
      error = error;
      console.error(error);
    }

    res.json({
      respuesta: error ? "ERROR" : itinerarios,
      success: error ? false : true,
      error: error,
    });
  },

  addItinerario: (req, res) => {
    const { name, photo, price, duration, likes, comments, hashtag, cityID } = req.body;
    new Itinerario({ name, photo, price, duration, likes, comments, hashtag, cityID })
      .save()
      .then((response) => res.json({ response }));
  },

  getItinerario: async (req, res) => {
    let itinerarios;
    const id = req.params.id;
    try {
      itinerarios = await Itinerario.findOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
    res.json({ respuesta: itinerarios, success: true });
  },
  getItinerarioCity: async (req, res) => {
    const cityId = (req.params.id)
    try {
      const selectedCityItineraries = await Itinerario.find({ cityID: cityId })
      if (selectedCityItineraries.length != 0) {
        res.json({ success: true, respuesta: selectedCityItineraries });
      } else {
        res.json({ success: false, respuesta: [] })
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, respuesta: "ERROR" });
    }
  },

  deleteItinerario: async (req, res) => {
    let itinerario;
    const id = req.params.id;
    try {
      itinerario = await Itinerario.findOneAndDelete({ _id: id });
    } catch (error) {
      console.log(error);
    }
    res.json({ response: itinerario });
  },

  modifyItinerario: async (req, res) => {
    let id = req.params.id;
    let itinerarios = req.body;
    let actualizado;
    try {
      actualizado = await Itinerario.findOneAndUpdate(
        { _id: id },
        itinerarios,
        {
          new: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
    res.json({ success: actualizado ? true : false });
  },
};

module.exports = itinerariosControllers;
