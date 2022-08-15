/**
 * Author: Hrishita Mavani
 * Feature: Blog Management
 */

const Blog = require("../../models/blogModel/index");

/** 
 * This function does all the operations on blog collection
 * @param {*} req : The request passsed as a parameter to the function blogDB
 * @returns : The function returns the Blog model
 */

exports.fetchAllBlogs = function (req, res) {
  Blog.find({}, function (err, blogs) {
    if (err) {
      res.send(err);
    }
    res.json(blogs);
  });
};

exports.createBlog = function (req, res) {
  const insertBlogData = new Blog();
  const { blog_id, author_id, title, content, image, destination_tag } =
    req.body;

  (insertBlogData.blog_id = blog_id),
    (insertBlogData.author_id = author_id),
    (insertBlogData.title = title),
    (insertBlogData.content = content),
    (insertBlogData.image = image),
    (insertBlogData.destination_tag = destination_tag);

  insertBlogData.save(function (err, blog) {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
};

exports.fetchBlogByDestination = function (req, res) {
  const { destination_tag } = req.body;
  Blog.find({ destination_tag }, function (err, blog) {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  }).sort({ published_date: -1 });
};

exports.addComment = function (req, res) {
  const { comment_id, blog_id, comment_text, author_id } = req.body;
  Blog.findOneAndUpdate(
    { blog_id },
    {
      $push: {
        comments: {
          comment_id,
          blog_id,
          comment_text,
          author_id,
        },
      },
    },
    function (err, comment) {
      if (err) {
        res.send(err);
      }
      res.json(comment);
    }
  );
};

exports.fetchBlogComments = function (req, res) {
  const { blog_id } = req.body;

  Blog.find({ blog_id }, { comments: 1 }, function (err, comment) {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
};

exports.deleteBlogByID = function (req, res) {
  const { blog_id } = req.body;
  Blog.findOneAndDelete({ blog_id }, function (err, blog) {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
};

exports.fetchBlogByID = function (req, res) {
  const { blog_id } = req.body;
  Blog.find({ blog_id }, function (err, blog) {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
};

exports.findBlogByUserID = function (req, res) {
  let  userID  = req.body.author_id;
  Blog.find({author_id:  userID }, function (err, blog) {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
};
