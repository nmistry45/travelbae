/**
 * Author: Smily Ms
 * Feature: Bucket List
 */

 const bucketListDB = require("../../data/bucketListDB");

 /**
  * This function is used to return the data of bucketListDB. Whenever this function is called,
  * the user data will be fetched from the mongo and will be returned in json format.
  * @param {*} req
  */
 exports.addDataToBucketList = function (req, res) {
   bucketListDB.addDataToBucketList(req, res);
 };

 exports.removeDataFromBucketList = function (req, res) {
  bucketListDB.removeDataFromBucketList(req, res);
};

 exports.fetchBucketListDataByUserId = function (req, res) {
    bucketListDB.fetchBucketListDataByUserId(req, res);
 }