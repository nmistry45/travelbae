/**
 * Author: Sangramsinh More
 * Feature: Accommodation
 * Task: Accommoadation Middleware for mongoose
 */
const accommodationDB = require("../../data/accommodationDB");

exports.searchAccommodation = function (req, res) {
  accommodationDB.searchAccommodation(req, res);
};