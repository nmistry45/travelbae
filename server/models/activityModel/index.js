/**
 * Author: Sangramsinh More
 * Feature: Activity
 * Description: Activity schema for mongoose
 */
const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the accommodationSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const activitySchema = new mongoose.Schema({
  dest_name: { type: String },
  activity_id: { type: String },
  activity_name: { type: String },
  activity_desc: { type: String },
  dest_code: { type: String },
  activity_type: { type: String },
  activity_address: { type: String },
  activity_image: { type: String },
  price: { type: Number }
});

/**
 * The first param is the name for the "model" for exporting, second param is the schema name, and
 * the third param is the collection name.
 */

const activity = mongoose.model("activity", activitySchema, "activity");
/**
 * The module is being exported as 'activity'
 * so that this module can be imported into other modules.
 */
module.exports = activity;
