/**
 * Author: Smily Ms
 * Feature: Bucket List
 */

 const BucketList = require("../../models/bucketListModel");
 /**
  * This function does all the operations on destination collection
  * @param {*} req : The request passsed as a parameter to the function.
  * @param {*} res : The response sent
  */
 exports.addDataToBucketList = function (req, res) {
   const bucketListData = new BucketList();
   const {
     dest_name,
     dest_code,
     email_id,
     img,
   } = req.body;
   (bucketListData.dest_name = dest_name),
     (bucketListData.dest_code = dest_code),
     (bucketListData.email_id = email_id),
     (bucketListData.img = img);
 
     bucketListData.save((err) => {
     if (err) return res.json({ success: false, error: err });
     return res.json({ success: true });
   });
 };

 exports.removeDataFromBucketList = function (req, res) {
  BucketList.findOneAndDelete({
    $and: [
      { email_id: req.body.email_id },
      { dest_name: req.body.dest_name }
    ],
  }, function (err, bucketList) {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, bucketList: bucketList });
  })
};
 
 exports.fetchBucketListDataByUserId = function (req, res) {
    BucketList.find({email_id : req.body.email_id}, function (err, bucketListItems) {
     if (err) return res.json({ success: false, error: err });
     return res.json({ success: true, bucketListItems: bucketListItems });
   })
 };