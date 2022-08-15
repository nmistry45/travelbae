/**
 * Author: Sangramsinh More
 * Feature: Activity
 * Description: Activity router for backend calls
 */
const activityRouter = require("express").Router();
const activityService = require("../../middleware/activityService");

activityRouter.post(
  "/searchActivity",
  activityService.searchActivity
);
module.exports = activityRouter;
