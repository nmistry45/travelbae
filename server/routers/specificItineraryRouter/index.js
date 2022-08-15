/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Filter Itinerary
 */
const specificItineraryRouter = require("express").Router();
const specificItineraryService = require("../../middleware/specificItineraryService");

/**
 * This router is to create a POST API for fetching the specific city itineraies and filtering them based on
 * activity and are displayed on the city itinerary page.
 */
specificItineraryRouter.post(
  "/fetchSpecificItineraries",
  specificItineraryService.fetchSpecificItineraries
);

specificItineraryRouter.post(
  "/filterItineraries",
  specificItineraryService.filterItineraries
);

module.exports = specificItineraryRouter;
