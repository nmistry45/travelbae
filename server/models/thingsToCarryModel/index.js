/**
 * Author: Trushita Maurya
 * Feature: Things to carry
 * Description: Things to carry schema for mongoose
 */
const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the userSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const thingsToCarrySchema = new mongoose.Schema({
  category: { type: String },
  name: { type: String },
  tags: [String],
});

const ThingsToCarry = mongoose.model(
  "thingsToCarry",
  thingsToCarrySchema,
  "thingsToCarry"
);
/**
 * The module is being exported as 'User'
 * so that this module can be imported into other modules.
 */
module.exports = ThingsToCarry;
