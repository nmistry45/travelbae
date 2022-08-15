/**
 * Author: Smily Ms
 * Feature: Bucket List
 */
const bucketListRouter = require("express").Router();
const bucketListService = require("../../middleware/bucketListService");
/**
 * This router is to create a POST API for inserting, fetching, updating the destinations. 
 * This API can be tested on Postman
 * with route '/bl/{insert}' at the end of the server_url.
 */
 bucketListRouter.post("/addDataToBucketList", bucketListService.addDataToBucketList);

 bucketListRouter.post("/removeDataFromBucketList", bucketListService.removeDataFromBucketList);

 bucketListRouter.post("/fetchBucketListDataByUserId", bucketListService.fetchBucketListDataByUserId);

module.exports = bucketListRouter;
