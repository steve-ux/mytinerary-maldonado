const Activity = require("../models/Activity")

const activitiesControllers = {
    addActivity: async (req, res) => {
        let newActivity = await Activity({...req.body})
        try {
            await newActivity.save()
            res.json({success: true})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    }, 

    getActivitiesOfOneItinerary: async (req, res) => {
        try {
            let itineraryActivities = await Activity.find({itineraryId: req.params.itineraryId})
            res.json({success: true, response: itineraryActivities})
        } catch (error) {
            res.json({success: false, response: error.message})
        }
    }
}

module.exports = activitiesControllers