const Itinerario = require("../models/Itinerario");

const itinerariosControllers = {
  getItinerarios: async (req, res) => {
    let itinerarios;
    let error = null;
    try {
      itinerarios = await Itinerario.find().populate("cityID");
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
    const { name, photo, price, duration, likes, comments, hashtag, cityID } =
      req.body;
    new Itinerario({
      name,
      photo,
      price,
      duration,
      likes,
      comments,
      hashtag,
      cityID,
    })
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
    const cityId = req.params.id;
    try {
      const selectedCityItineraries = await Itinerario.find({ cityID: cityId });
      if (selectedCityItineraries.length != 0) {
        res.json({ success: true, respuesta: selectedCityItineraries });
      } else {
        res.json({ success: false, respuesta: [] });
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
  addOrRemoveLike: (req, res) => {
    Itinerario.findOne({ _id: req.params.id })
      .then((itinerary) => {
        if (itinerary.likes.includes(req.user._id)) {
          Itinerario.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { likes: req.user.id } },
            { new: true }
          )
            .then((newItinerary) =>
              res.json({ success: true, response: newItinerary.likes })
            )
            .catch((error) => console.log(error));
        } else {
          Itinerario.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { likes: req.user.id } },
            { new: true }
          )
            .then((newItinerary) =>
              res.json({ success: true, response: newItinerary.likes })
            )
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => res.json({ success: false, response: error }));
  },
  controlComment: async (req, res) => {
    switch (req.body.type) {
      case "addComment":
        try {
          const newComment = await Itinerario.findOneAndUpdate(
            { _id: req.params.id },
            {
              $push: {
                comments: { comment: req.body.comment, userId: req.user._id, img: req.user.img, name: req.user.name },
              },
            },
            { new: true }
          ).populate("comments.userId");
          if (newComment) {
            res.json({ success: true, response: newComment.comments });
          } else {
            throw new Error();
          }
        } catch (error) {
          res.json({ success: false, response: error.message });
        }
        break;

      case "editComment":
        try {
          let editedComment = await Itinerario.findOneAndUpdate(
            { "comments._id": req.params.id },
            { $set: { "comments.$.comment": req.body.comment } },
            { new: true }
          );
          if (editedComment) {
            res.json({ success: true, response: editedComment.comments });
          } else {
            throw new Error();
          }
        } catch (error) {
          res.json({ success: false, response: error.message });
        }
        break;

      case "deleteComment":
        try {
          let deletedComment = await Itinerario.findOneAndUpdate(
            { "comments._id": req.body.commentId },
            { $pull: { comments: { _id: req.body.commentId } } },
            { new: true }
          );
          if (deletedComment) {
            res.json({ success: true });
          } else {
            throw new Error();
          }
        } catch (error) {
          res.json({ success: false, response: error.message });
        }
        break;
    }
  },
};

module.exports = itinerariosControllers;
