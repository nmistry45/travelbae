/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Filter Itinerary
 */
const SpecificItinerary = require("../../models/specificItineraryModel");

/**
 * This function does all the operations on specific itineraries collection. It will fetch the content of the
 * itinerary city that's sent from the front-end and ignore the case of the city name and also filter's the
 * itineraries based on tags stored in MongoDB.
 * @param {*} req
 * @param {*} res
 */
exports.fetchSpecificItineraries = function (req, res) {
  SpecificItinerary.find(
    { itinerary_place: { $regex: req.body.itinerary_place, $options: "i" } },
    function (err, specificItineraries) {
      if (err) return res.json({ success: false, error: err });
      res.json(specificItineraries);
    }
  );
};

exports.filterItineraries = function (req, res) {
  if (req.body.tags.length === 0) {
    SpecificItinerary.find(
      { itinerary_place: { $regex: req.body.itinerary_place, $options: "i" } },
      function (err, specificItineraries) {
        if (err) return res.json({ success: false, error: err });
        res.json(specificItineraries);
      }
    );
  } else {
    SpecificItinerary.find(
      {
        $and: [
          { tags: { $in: req.body.tags } },
          {
            itinerary_place: {
              $regex: req.body.itinerary_place,
              $options: "i",
            },
          },
        ],
      },
      function (err, filterItineraries) {
        if (err) return res.json({ success: false, error: err });
        res.json(filterItineraries);
      }
    );
  }
};
