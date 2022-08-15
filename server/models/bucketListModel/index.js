/**
 * Author: Smily Ms
 * Feature: Bucket List
 */
 const mongoose = require("mongoose");

 /**
  * This constant defines the model structure of the bucketListSchema that is to be stored in MongoDB.
  *  The schema declares the data type and requirement for each field.
  */
 const bucketListSchema = new mongoose.Schema({
   email_id: { type: String, required: true },
   dest_name: { type: String, required: true },
   dest_code: { type: String, required: true },
   img: { type: String, required: true }
 });
 
 const BucketList = mongoose.model("bucketList", bucketListSchema);
 /**
  * The module is being exported as 'BucketList'
  * so that this module can be imported into other modules. 
  */
 module.exports = BucketList;