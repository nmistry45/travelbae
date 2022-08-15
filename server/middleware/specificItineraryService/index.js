/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Filter Itinerary
 */
const specificItineraryDB = require("../../data/specificItineraryDB");

/**
 * These functions are used to return the data of specificItineraryDB by fetching the specific itineraries
 * and filtering via some activity. Whenever this function is called, the specific city itinerary data will
 * be fetched from MongoDB and will be returned in json format.
 * @param {*} req
 * @param {*} res
 */
exports.fetchSpecificItineraries = function (req, res) {
  specificItineraryDB.fetchSpecificItineraries(req, res);
};

exports.filterItineraries = function (req, res) {
  specificItineraryDB.filterItineraries(req, res);
};
