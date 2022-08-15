/**
 * Author: Sangramsinh More
 * Feature: Activity
 * Task: Activity Middleware for mongoose
 */
const activityDB = require("../../data/activityDB");

exports.searchActivity = function (req, res) {
    activityDB.searchActivity(req, res);
};