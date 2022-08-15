/**
 * Author: Trushita Maurya
 * Feature: User Management
 */
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const credentials = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(credentials);

module.exports = async (to, content) => {
  const contacts = {
    from: process.env.MAIL_USER,
    to,
  };

  const email = Object.assign({}, content, contacts);

  await transporter.sendMail(email);
};
