/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Weather Integration
 */
const dayItineraryRouter = require("express").Router();
const dayItineraryService = require("../../middleware/dayItineraryService");

/**
 * This router is to create a POST API for fetching the content to be displayed
 * on the day itinerary page.
 */
dayItineraryRouter.post(
  "/fetchDayItinerary",
  dayItineraryService.fetchDayItinerary
);

module.exports = dayItineraryRouter;
