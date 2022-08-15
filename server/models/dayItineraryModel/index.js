/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Weather Integration
 */
const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the dayItinerarySchema that is to be stored in MongoDB.
 * The schema declares the data type and requirement for each field.
 */
const dayItinerarySchema = new mongoose.Schema({
  itinerary_image: { type: String, required: true },
  day: { type: Number, required: true },
  itinerary_place: { type: String, required: true },
});

const DayItinerary = mongoose.model(
  "DayItinerary",
  dayItinerarySchema,
  "dayItinerary"
);

module.exports = DayItinerary;
