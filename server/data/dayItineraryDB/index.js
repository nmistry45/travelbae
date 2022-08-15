/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Weather Integration
 */
const DayItinerary = require("../../models/dayItineraryModel");

/**
 * This function does all the operations on dayItinerary collection
 * to find the itinerary city that's sent from the front-end and ignore the case of the city name.
 * @param {*} req
 * @param {*} res
 */
exports.fetchDayItinerary = function (req, res) {
  DayItinerary.find(
    { itinerary_city: { $regex: req.body.itinerary_city, $options: "i" } },
    function (err, dayItineraries) {
      if (err) return res.json({ success: false, error: err });

      res.json(dayItineraries);
    }
  );
};
