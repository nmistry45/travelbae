/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Search Itinerary and Itinerary Recommendation
 */
const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the itinerarySchema that is to be stored in MongoDB.
 * The schema declares the data type and requirement for each field.
 */
const itinerarySchema = new mongoose.Schema({
  itinerary_image: { type: String, required: true },
  itinerary_city: { type: String, required: true },
  itinerary_description: { type: String, required: true },
  itinerary_summary: { type: String, required: true },
  tags: [String],
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  itinerary_dur: { type: String, required: true },
  recommended: { type: Boolean, required: true },
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema, "itinerary");

module.exports = Itinerary;
