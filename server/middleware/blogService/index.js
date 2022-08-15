/**
 * Author: Hrishita Mavani
 * Feature: Blog
 * Task: Blog Middleware for mongoose
 */
const blogDB = require("../../data/blogDB/index");

/**
 * This function is used to return the data of blogDB. Whenever this function is called,
 * the blog data will be fetched from the mongo and will be returned in json format.
 * @param {*} req  -  The request passsed as a parameter to the function blogDB
 *
 */

exports.createBlog = function (req, res) {
  blogDB.createBlog(req, res);
};

exports.fetchAllBlogs = function (req, res) {
  blogDB.fetchAllBlogs(req, res);
};

exports.fetchBlogByDestination = function (req, res) {
  blogDB.fetchBlogByDestination(req, res);
};

exports.fetchBlogComments = function (req, res) {
  blogDB.fetchBlogComments(req, res);
};

exports.deleteBlogByID = function (req, res) {
  blogDB.deleteBlogByID(req, res);
};

exports.addComment = function (req, res) {
  blogDB.addComment(req, res);
};

exports.fetchBlogByID = function (req, res) {
  blogDB.fetchBlogByID(req, res);
};

exports.findBlogByUserID = function (req, res) {
  blogDB.findBlogByUserID(req, res);
};

/**
 * The module is being exported as blogService so that this module can be imported into other modules.
 */
