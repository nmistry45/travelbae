/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Weather Integration
 */
const dayItineraryDB = require("../../data/dayItineraryDB");

/**
 * This function is used to return the data of dayItineraryDB. Whenever this function is called,
 * the day itinerary data will be fetched from MongoDB and will be returned in json format.
 * @param {*} req
 * @param {*} res
 */
exports.fetchDayItinerary = function (req, res) {
  dayItineraryDB.fetchDayItinerary(req, res);
};
