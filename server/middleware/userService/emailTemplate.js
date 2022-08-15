/**
 * Author: Trushita Maurya
 * Feature: User Management
 */

const { FRONTEND_DEV_URL } = require("../../config");

// This file is exporting an Object with a single key/value pair.
// However, because this is not a part of the logic of the application
// it makes sense to abstract it to another file. Plus, it is now easily
// extensible if the application needs to send different email templates
// (eg. unsubscribe) in the future.
module.exports = {
  confirm: (userId) => ({
    subject: "React Confirm Email",
    html: `
      <a href='${FRONTEND_DEV_URL}/confirm/${userId}'>
        click to confirm email
      </a>
    `,
    text: `Copy and paste this link: ${FRONTEND_DEV_URL}/confirm/${userId}`,
  }),
};
