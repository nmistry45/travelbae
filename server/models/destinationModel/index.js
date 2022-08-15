/**
 * Author: Smily Ms
 * Feature: Destination Information System
 */
const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the destinationSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requirement for each field.
 */
const destinationSchema = new mongoose.Schema({
  dest_name: { type: String, required: true },
  dest_desc: { type: String, required: true },
  dest_code: { type: String, required: true, unique: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  blogs: [{
    blog_id: { type: String },
    title: { type: String },
    img: { type: String }
  }],
  activities: [{
    activity_id: { type: String },
    activity_name: { type: String },
    activity_type: { type: String }
  }],
  country_name: { type: String, required: true },
  img: { type: String, required: true }
});

const Destination = mongoose.model("destination", destinationSchema);
/**
 * The module is being exported as 'Destination'
 * so that this module can be imported into other modules. 
 */
module.exports = Destination;