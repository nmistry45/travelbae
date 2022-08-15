/**
 * Author: Hrishita Mavani
 * Feature: Blog
 * Description: Blog schema for mongoose
 */
const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the blogSchema and commentSchema that is to be stored in MongoDB.
 * The schema declares the data type and requiurement for each field.
 * The schema also defines the default value for each field.
 * The commentSchema is passed to the blogSchema as a sub-document.
 */

const commentSchema = new mongoose.Schema({
  comment_id: { type: String },
  blog_id: { type: String },
  comment_text: { type: String },
  author_id: { type: String },
  timestamp: { type: Date, Default: Date.now }
});

const blogSchema = new mongoose.Schema({
  blog_id: { type: String, required: true },
  author_id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  comments: [commentSchema],
  published_date: { type: Date, Default: Date.now },
  destination_tag: [
    {
      type: String,
    },
  ],
});

const Blog = mongoose.model("blog", blogSchema);

/**
 * The module is being exported as 'Blog'
 * so that this module can be imported into other modules.
 */

module.exports = Blog;
