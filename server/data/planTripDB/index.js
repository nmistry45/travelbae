/**
 * Author: Nishit Mistry and Smriti Mishra
 * This file does all the operations on plantrips collection of Mongo DB
 */
const planTrip = require("../../models/planTripModel/index");

/**
 * This function does all the operations on planTrip collection
 * @param {*} req : The request passsed as a parameter to the function planTripDB
 * @returns : The function returns the planTrip model
 */

exports.createPlanTrip = function (req, res) {
  const insertPlanTripData = new planTrip();
  const {
    plan_name,
    userID,
    // city,
    country,
    start_date,
    end_date,
    
    travel_partner,
    recommended_itineraries,
    accommodation,
    transportation,
    plan,
    activity,
  } = req.body;


  if (accommodation) {
    insertPlanTripData.city = accommodation.city;
  } else if (activity) {
    insertPlanTripData.city = activity.city;
  } else if (transportation) {
    insertPlanTripData.city = transportation.city;
  } else if (plan) {
    insertPlanTripData.city = plan.city;
    insertPlanTripData.start_date = plan.start_date;
    insertPlanTripData.end_date = plan.end_date;
    insertPlanTripData.travel_partner = plan.travel_partner;
  } else {
    insertPlanTripData.city = city;
  }
  (insertPlanTripData.plan_id = Math.random() * 1000000),
    (insertPlanTripData.plan_name = plan_name),
    (insertPlanTripData.userID = userID),
    // (insertPlanTripData.city = city),
    (insertPlanTripData.country = country),
    (insertPlanTripData.is_completed = false),
    (insertPlanTripData.recommended_itineraries = recommended_itineraries),
    (insertPlanTripData.accommodation = accommodation),
    (insertPlanTripData.transportation = transportation),
    (insertPlanTripData.activity = activity),
    insertPlanTripData.save(function (err, planTrip) {
      if (err) {
        res.send(err);
      }
      res.json(planTrip);
    });
};

exports.fetchAllPlanTrips = function (req, res) {
  planTrip.find({}, function (err, planTrips) {
    if (err) {
      res.send(err);
    }
    res.json(planTrips);
  });
};

exports.findPlanTripByUserID = function (req, res) {
  let { userID } = req.body;
  if (userID === undefined) {
    userID = req.params.id;
  }
  planTrip.find({ userID }, function (err, planTrip) {
    if (err) {
      res.send(err);
    }
    res.json(planTrip);
  });
};

exports.deletePlanTripByID = function (req, res) {
  const { plan_id } = req.body;
  planTrip.findOneAndDelete({ plan_id }, function (err, planTrip) {
    if (err) {
      res.send(err);
    }
    res.json(planTrip);
  });
};

exports.updatePlanTripByID = function (req, res) {
  const { plan_id } = req.body;
  planTrip.findOneAndUpdate(
    { plan_id },
    { is_completed: true },
    function (err, planTrip) {
      if (err) {
        res.send(err);
      }
      res.json(planTrip);
    }
  );
};

exports.findPlanTripByPlanID = function (req, res) {
  let { plan_id } = req.body;
  planTrip.find({ plan_id }, function (err, planTrip) {
    if (err) {
      res.send(err);
    }
    res.json(planTrip);
  });
};

exports.updatePlan = function (req, res) {
  const { plan_id, accommodation, transportation, activity } = req.body;
  let col_name = "";
  let col_value = "";
  if (accommodation) {
    col_name = "accommodation";
    col_value = accommodation;
  } else if (transportation) {
    col_name = "transportation";
    col_value = transportation;
  } else {
    col_name = "activity";
    col_value = activity;
  }
  planTrip.findOneAndUpdate(
    { plan_id },
    { $push: { [col_name]: col_value } },
    function (err, planTrip) {
      if (err) {
        res.send(err);
      }
      res.json(planTrip);
    }
  );
};
