/**
 * Author: Sangramsinh More
 * Feature: Accommodation
 * Task: Accommoadation schema for mongoose
 */
const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the accommodationSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const accommmodationSchema = new mongoose.Schema({
  hotel_id: { type: String },
  hotel_desc: { type: String },
  hotel_name: { type: String },
  address: { type: String },
  city: { type: String },
  price: { type: Number },
  check_in_date: { type: Date, default: Date.now },
  check_out_date: { type: Date, default: Date.now },
  hotel_image: { type: String },
  property_type: { type: String },
  travel_exp: { type: String },
  Rating: { type: String },
});

/**
 * The first param is the name for the "model" for exporting, second param is the schema name, and
 * the third param is the collection name.
 */

const accommodation = mongoose.model(
  "accommodation",
  accommmodationSchema,
  "accommodation"
);
/**
 * The module is being exported as 'accommodation'
 * so that this module can be imported into other modules.
 */
module.exports = accommodation;
