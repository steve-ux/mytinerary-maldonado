const mongoose = require("mongoose");

const itinerarioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  likes: { type: Number },
  comments: String,
  hashtag: { type: String },
  cityID: [{ type: mongoose.Types.ObjectId, ref: "ciudad", required: true }],
});

const Itinerario = mongoose.model("itinerario", itinerarioSchema);

module.exports = Itinerario;
