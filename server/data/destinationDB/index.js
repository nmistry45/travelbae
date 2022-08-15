/**
 * Author: Smily Ms
 * Feature: Destination Information System
 */

const Destination = require("../../models/destinationModel");
/**
 * This function does all the operations on destination collection
 * @param {*} req : The request passsed as a parameter to the function.
 * @param {*} res : The response sent
 */
exports.insertDestination = function (req, res) {
  const insertDestinationData = new Destination();
  const {
    dest_name,
    dest_desc,
    dest_code,
    latitude,
    longitude,
    blogs,
    activities,
    country_name,
    img,
  } = req.body;
  (insertDestinationData.dest_name = dest_name),
    (insertDestinationData.dest_desc = dest_desc),
    (insertDestinationData.dest_code = dest_code),
    (insertDestinationData.latitude = latitude),
    (insertDestinationData.longitude = longitude),
    (insertDestinationData.blogs = blogs),
    (insertDestinationData.activities = activities),
    (insertDestinationData.country_name = country_name),
    (insertDestinationData.img = img);

  insertDestinationData.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
};

exports.fetchAllDestinations = function (req, res) {
  Destination.find({}, function (err, destinationsList) {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, destinations: destinationsList });
  }).select("dest_name dest_desc dest_code img country_name");
};

exports.fetchDestinationOnTripPlanner = function (req, res) {
  Destination.find({}, function (err, destinationsList) {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, destinations: destinationsList });
  }).select("dest_name");
};

exports.fetchDestinationByCode = function (req, res) {
  Destination.findOne(
    { dest_name: req.params.dest_name },
    function (err, destinationsList) {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, destinations: destinationsList });
    }
  );
};

exports.fetchFilteredDestinations = function (req, res) {
  var tag = req.body.tags.tags;
  var searchText = req.body.dest_name;

  if (tag == undefined || tag.length == 0 || Object.keys(tag).length === 0) {
    tag = ["India", "Canada", "France", "Thailand", "UK", "USA"];
  }
  if (searchText == undefined) {
    searchText = "";
  }

  Destination.find(
    {
      $and: [
        { country_name: { $in: tag } },
        { dest_name: { $regex: req.body.dest_name, $options: "i" } },
      ],
    },
    function (err, destinationsList) {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, destinations: destinationsList });
    }
  ).select("dest_name dest_desc dest_code img country_name");
};

exports.updateDestinationByCode = function (req, res) {
  Destination.findOneAndUpdate(
    { dest_code: req.params.dest_code },
    { blogs: req.body.blog },
    function (err, destinationsList) {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, destinations: destinationsList });
    }
  );
};
