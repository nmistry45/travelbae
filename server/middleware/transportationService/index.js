/**
 * Author: Hrishita Maurya
 * Feature: Transportation
 * Task: Transportation Middleware for mongoose
 */
const transportationDB = require("../../data/transportationDB/index");
/**
 * This function is used to return the data of transportationDB. Whenever this function is called, 
 * the transportation data will be fetched from the mongo and will be returned in json format.
 * @param {*} req  -  The request passsed as a parameter to the function transportationDB 
 */

exports.fetchAllTransportation = function (req, res) {
  transportationDB.fetchAllTransportation(req, res);
};

exports.searchTransportation = function (req, res) {
  transportationDB.searchTransportation(req, res);
};


