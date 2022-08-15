/**
 * Author: Hrishita Maurya
 * Feature: Transportation
 * Description: Transportation schema for mongoose
 */
const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the transportationSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const transportationSchema = new mongoose.Schema({
    source: { type: String, required: true },
    dest_name: { type: String, required: true },
    flight_company: { type: String },
    start_date: { type: Number, required: true },
    return_date: { type: Number},
    trip_type: { type: String, required: true },
    price: { type: Number},
    trip_duration: { type: String},
    flight_company_logo: { type: String}
});

const Transportation = mongoose.model("transportation", transportationSchema, "transportation");
/**
 * The module is being exported as 'Transportation'
 * so that this module can be imported into other modules. 
 */
module.exports = Transportation;
