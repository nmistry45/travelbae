/**
 * Author: Trushita Maurya
 * Feature: Things to Carry
 * Task: Things to Carry Middleware for mongoose
 */
const thingsToCarryDB = require("../../data/thingsToCarryDB/index");

/**
 * This function is used to return the data of thingsToCarryDB. Whenever this function is called,
 * the blog data will be fetched from the mongo and will be returned in json format.
 * @param {*} req
 *
 */

exports.fetchAllThingsToCarry = function (req, res) {
  thingsToCarryDB.fetchAllThingsToCarry(req, res);
};

exports.filterThingsToCarry = function (req, res) {
  thingsToCarryDB.filterThingsToCarry(req, res);
};

exports.searchThingsToCarry = function (req, res) {
  thingsToCarryDB.searchThingsToCarry(req, res);
};

exports.shareChecklist = function (req, res) {
  thingsToCarryDB.shareChecklist(req, res);
};

exports.downloadPDF = function (req, res) {
  thingsToCarryDB.downloadPDF(req, res);
};
