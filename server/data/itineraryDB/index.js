/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Search Itinerary and Itinerary Recommendation
 */
const Itinerary = require("../../models/itineraryModel");

/**
 * This function does all the operations on itinerary collection. It will find if the recommended flag is set
 * true or false for fetching the recommendations and searches via the itinerary city that's sent from the
 * front-end and ignore the case of the city name.
 * @param {*} req
 * @param {*} res
 */
exports.fetchRecommendedItineraries = function (req, res) {
  Itinerary.find({ recommended: true }, function (err, itineraries) {
    if (err) return res.json({ success: false, error: err });
    res.json(itineraries);
  });
};

exports.searchByCity = function (req, res) {
  Itinerary.find(
    { itinerary_city: { $regex: req.body.itinerary_city, $options: "i" } },
    function (err, itineraries) {
      if (err) return res.json({ success: false, error: err });
      res.json(itineraries);
    }
  );
};

exports.findItineraryByCity = function (req, res) {
  Itinerary.find(
    { itinerary_city: { $regex: req.body.itinerary_city, $options: "i" } },
    function (err, itineraries) {
      if (err) return res.json({ success: false, error: err });
      res.json(itineraries);
    }
  );
};
