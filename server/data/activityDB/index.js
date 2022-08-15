/**
 * Author: Sangramsinh More
 * Feature: Activties to do
 */

/**
 * This function does all the operations on specific itineraries collection. It will fetch the content of the
 * itinerary city that's sent from the front-end and ignore the case of the city name and also filter's the
 * itineraries based on tags stored in MongoDB.
 * @param {*} req
 * @param {*} res
 */

const activity = require("../../models/activityModel");

exports.searchActivity = async function (req, res) {

  var tag = req.body.tags.tags;
  if (tag == undefined || Object.keys(tag).length === 0) {
    tag = ["Camping", "Fishing", "Hiking"];
  }
  activity
    .find(
      {
        activity_address : { $regex: req.body.hotel_name, $options: "i" },
        activity_type : { $in: tag },
      },
      function (err, activity) {
        if (err) return res.json({ success: false, error: err });
        res.json({
          data: activity,
        });
      }
    )
    .sort({ price: req.body.sort_type })
};
