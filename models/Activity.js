const mongoose = require("mongoose")

const activitySchema = new mongoose.Schema ({
    activity: {type: String, required: true},
    img: {type: String, required: true},
    description: {type: String},
    itineraryId: {type: mongoose.Types.ObjectId, ref: "itinerario"},
})

const Activity = mongoose.model("activity", activitySchema)

module.exports = Activity