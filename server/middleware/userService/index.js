/**
 * Author: Trushita Maurya
 * Description: Handles DB operations of user management - sign up , login, change password
 */
const userDB = require("../../data/userDB");

/**
 * This file is used to return the data of userDB. Whenever this function is called,
 * the user data will be fetched from the mongo and will be returned in json format.
 * @param {*} req
 * @returns
 */

exports.fetchUserProfile = function (req, res) {
  userDB.fetchUserProfile(req, res);
};

exports.updatePassword = function (req, res) {
  userDB.updatePassword(req, res);
};

exports.addDestToBucketList = function (req, res) {
  userDB.addDestToBucketList(req, res);
};

exports.confirmEmail = function (req, res) {
  userDB.confirmEmail(req, res);
};
