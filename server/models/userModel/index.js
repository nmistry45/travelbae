/**
 * Author: Trushita Maurya
 * Feature: User Management
 * Description: User Management schema for mongoose
 */
const mongoose = require("mongoose");
/**
 * This constant defines the model structure of the userSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  password: {type:String,required:true},
  plannedTrips:[{
    dest_name: String
  }],
  blogs:[{
    blog_title:String
  }],
  flags: [{
    flag_img: String
  }],
  bucket_list: [{
    dest_name: String,
    dest_code: String,
    img: String
  }]
});

const User = mongoose.model("users", userSchema);
/**
 * The module is being exported as 'User'
 * so that this module can be imported into other modules. 
 */
module.exports = User;
