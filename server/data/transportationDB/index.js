/**
 * Author: Hrishita Mavani
 * Feature: Blog Management
 */
const Transportation = require("../../models/transportationModel/index");


/**
 * This funtion is used to get the list of all available flights
 * @param {*} req : The request passsed as a parameter to the function transportationDB
 * @param {*} req 
 */
exports.fetchAllTransportation = function (req, res) {
  Transportation.find(function (err, Transportation) {
    if (err) return res.json({ success: false, error: err });
    res.json({ data: Transportation });
  });
};

/**
 * This function is used to search for a particular flight
 * @param {*} req 
 * @param {*} res 
 */
exports.searchTransportation = function (req, res) {

  // if round trip 
  if (req.body.return_date)  {
    Transportation.find(
      {
        trip_type: "round trip",
        source: req.body.source.toLowerCase(),
        dest_name: req.body.dest_name.toLowerCase(),
        start_date : {$gte: req.body.start_date},
        return_date: {$lt: req.body.return_date},
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  } else { // one way trip
    Transportation.find(
      { trip_type: "one way",
        source: req.body.source.toLowerCase(),
        dest_name: req.body.dest_name.toLowerCase(),
        start_date : {$gte: req.body.start_date}
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  }

}
