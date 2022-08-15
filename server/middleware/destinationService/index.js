/**
 * Author: Smily Ms
 * Feature: Destination Information System
 */

const destinationDB = require("../../data/destinationDB");

/**
 * This function is used to return the data of destinationDB. Whenever this function is called,
 * the user data will be fetched from the mongo and will be returned in json format.
 * @param {*} req
 */
exports.insertDestination = function (req, res) {
  destinationDB.insertDestination(req, res);
};

exports.fetchAllDestinations = function (req, res) {
  destinationDB.fetchAllDestinations(req, res);
};

exports.fetchDestinationByCode = function (req, res) {
  destinationDB.fetchDestinationByCode(req, res);
};

exports.updateDestinationByCode = function (req, res) {
  destinationDB.updateDestinationByCode(req, res);
};

exports.fetchFilteredDestinations = function (req, res) {
  destinationDB.fetchFilteredDestinations(req, res);
};

exports.fetchDestinationOnTripPlanner = function (req, res) {
  destinationDB.fetchDestinationOnTripPlanner(req, res);
};
