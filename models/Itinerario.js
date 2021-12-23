const mongoose = require("mongoose");

const itinerarioSchema = new mongoose.Schema({
  title: {type: String },
  name: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  comments:[{comment:{type:String}, userId:{type: mongoose.Types.ObjectId, ref: 'user'}, img:{type: String}, name:{type: String}}],
  likes: {type: Array},
  hashtag: { type: String },
  cityID: [{ type: mongoose.Types.ObjectId, ref: "ciudad", required: true }],
});

const Itinerario = mongoose.model("itinerario", itinerarioSchema);

module.exports = Itinerario;
