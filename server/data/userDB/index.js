/**
 * Author: Trushita Maurya
 * Feature: User Management
 */

 const User = require("../../models/userModel");
 const bcrypt = require("bcrypt");

/**
 *   This function does all the operations  on users collection of Mongo DB
 *   It is used to fetch all the content of a user and perform operations like updating the password , displayin user profile
 *   and adding destination to bucket list.
 *   @param {*} req
 *   @param {*} res
 */


exports.fetchUserProfile = function (req, res) {
  const email = req.body.email;
  User.find({ email: email }, function (err, user) {
    if (err) return res.json({ success: false, error: err });
    res.json(user);
  });
};

exports.updatePassword = function (req, res) {
  const { userID, cPassword, nPassword, confPassword } = req.body;
  let errors = [];

  //Check passwords match
  if (nPassword !== confPassword) {
    errors.push({ msg: "New passwords do not match." });
  }

  if (errors.length > 0) {
    res.json({
      error: "New passwords do not match",
    });
  } else {
    //VALIDATION SUCCESSFUL
    User.findOne({ email: userID }).then((user) => {
      bcrypt.compare(cPassword, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(nPassword, salt, (err, hash) => {
              if (err) throw err;
              user.password = hash;
              user.save();
            })
          );

          res.json({
            error: "",
            message: "Password successfully updated!",
          });
        } else {
          res.json({
            error: "Current password is not a match.",
          });
        }
      });
    });
  }
};

exports.addDestToBucketList = function (req, res) {
  const { dest_name, dest_code, img } = req.body.bucket_list;
  const userID = req.body.email;
  User.findOne({ email: userID }, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      user.bucket_list.push({ dest_name, dest_code, img });
      user.save();
      return res.json({ success: true, user: user });
    }
  });
};

exports.confirmEmail = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      // A user with that id does not exist in the DB. Perhaps some tricky
      // user tried to go to a different url than the one provided in the
      // confirmation email.
      if (!user) {
        res.json({ msg: msgs.couldNotFind });
      }

      // The user exists but has not been confirmed. We need to confirm this
      // user and let them know their email address has been confirmed.
      else if (user && !user.confirmed) {
        User.findByIdAndUpdate(id, { confirmed: true })
          .then(() => res.json({ msg: msgs.confirmed }))
          .catch((err) => console.log(err));
      }

      // The user has already confirmed this email address.
      else {
        res.json({ msg: msgs.alreadyConfirmed });
      }
    })
    .catch((err) => console.log(err));
};
