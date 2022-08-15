/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Search Itinerary and Itinerary Recommendation
 */
const itineraryDB = require("../../data/itineraryDB");

/**
 * These functions are used to return the data of itineraryDB by fetching the recommended itineraries and
 * searching via a city name. Whenever this function is called, the itinerary data will be fetched from
 * MongoDB and will be returned in json format.
 * @param {*} req
 * @param {*} res
 */
exports.fetchRecommendedItineraries = function (req, res) {
  itineraryDB.fetchRecommendedItineraries(req, res);
};

exports.searchByCity = function (req, res) {
  itineraryDB.searchByCity(req, res);
};

exports.findItineraryByCity = function (req, res) {
  itineraryDB.findItineraryByCity(req, res);
};
