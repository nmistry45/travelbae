/**
 * Author: Nishit Mistry and Smriti Mishra
 * Description: Handles all routes related to user dashboard plan information - add plan, fetch paln, delete plan, update plan.
 */
const planTripRouter = require("express").Router();
const planTripService = require("../../middleware/planTripService");
/**
 * This router is to create a API forplanTrip . This API can be tested on Postman
 */

planTripRouter.post("/createPlanTrip", (req, res) => {
  return planTripService.createPlanTrip(req, res);
});

planTripRouter.post("/fetchAllPlanTrips", planTripService.fetchAllPlanTrips);

planTripRouter.post(
  "/findPlanTripByUserID/:id?",
  planTripService.findPlanTripByUserID
);

planTripRouter.post("/deletePlanTripByID", planTripService.deletePlanTripByID);
planTripRouter.post("/updatePlanTripByID", planTripService.updatePlanTripByID);
planTripRouter.post(
  "/findPlanTripByPlanID",
  planTripService.findPlanTripByPlanID
);
planTripRouter.post("/updatePlan", planTripService.updatePlan);

module.exports = planTripRouter;
