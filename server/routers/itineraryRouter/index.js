/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Search Itinerary and Itinerary Recommendation
 */
const itineraryRouter = require("express").Router();
const itineraryService = require("../../middleware/itineraryService");

/**
 * This router is to create a POST API for fetching the recommended itineraies and searching a city
 * that are displayed on the itinerary page.
 */
itineraryRouter.post(
  "/fetchRecommendedItineraries",
  itineraryService.fetchRecommendedItineraries
);

itineraryRouter.post("/searchByCity", itineraryService.searchByCity);

itineraryRouter.post(
  "/findItineraryByCity",
  itineraryService.findItineraryByCity
);

module.exports = itineraryRouter;
