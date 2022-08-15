/**
 * Author: Trushita Maurya and Smriti Mishra
 * Description: Handles all routes related to user management - sign up , login, change password
 */

const userRouter = require("express").Router();
const userService = require("../../middleware/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const sendEmail = require("../../middleware/userService/emailSettings");
const emailMsgs = require("../../middleware/userService/emailMsgs");
const emailTemplate = require("../../middleware/userService/emailTemplate");

userRouter.post("/userProfile", userService.fetchUserProfile);

userRouter.post("/addDestToBucketList", userService.addDestToBucketList);

userRouter.post("/changePassword", userService.updatePassword);

//Authentication Logic for registration

userRouter.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
      lName: req.body.lName,
      fName: req.body.fName,
    });

    User.findOne({ email: req.body.email })
      .then((user1) => {
        if (user1) {
          return res.status(401).json({
            message: "User Already Exist",
          });
        }

        user.save().then((result) => {
          if (!result) {
            return res.status(500).json({
              message: "Error Creating USer",
            });
          }
          sendEmail(result.email, emailTemplate.confirm(result._id));
          res.status(201).json({
            message: emailMsgs.confirm,
            result: result,
          });
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });
});

userRouter.post("/login", (req, res, next) => {
  let fetchedUser;

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed no such user",
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed inccorect password",
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

userRouter.post("/confirmEmail", userService.confirmEmail);

module.exports = userRouter;
