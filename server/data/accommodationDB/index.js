/**
 * Author: Sangramsinh More
 * Feature: Accommodation
 * Task: Accommoadation service for mongoose REST calls
 */

/**
 * This function does all the operations on specific accommodation collection.
 * It will fetch the content of accommodations based on city name, rating and price.
 * @param {object} req
 * @param {object} res
 * 
 */
const accommodation = require("../../models/accommodationModel");

// here remove .sort() if you only want to search
exports.searchAccommodation = async function (req, res) {

  var tag = req.body.tags.tags;
  if (tag == undefined || Object.keys(tag).length === 0) {
    tag = ["2 Star", "1 Star", "3 Star", "4 Star", "5 Star"];
  }

  accommodation
    .find(
      {
        city: { $regex: req.body.hotel_name, $options: "i" },
        Rating: { $in: tag }
      },
      function (err, accommodation) {
        if (err) return res.json({ success: false, error: err });
        res.json({
          data: accommodation,
        });
      }
    )
    .sort({ price: req.body.sort_type })
};
