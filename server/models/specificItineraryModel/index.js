/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Filter Itinerary
 */
const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the specificItinerarySchema that is to be stored in MongoDB.
 * The schema declares the data type and requirement for each field.
 */
const specificItinerarySchema = new mongoose.Schema({
  itinerary_image: { type: String, required: true },
  itinerary_place: { type: String, required: true },
  itinerary_summary: { type: String, required: true },
  tags: [String],
  duration: { type: Number, required: true },
});

const SpecificItinerary = mongoose.model(
  "SpecificItinerary",
  specificItinerarySchema,
  "specificItinerary"
);

module.exports = SpecificItinerary;
