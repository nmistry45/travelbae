/**
 * Author: Hrishita Mavani
 * Feature: Blogs
 * Description: Blog router for backend calls
 */
const blogRouter = require("express").Router();
const blogService = require("../../middleware/blogService");
/**
 * This router is to create a API for Blog . This API can be tested on Postman
 */

blogRouter.post("/createBlog", blogService.createBlog);

blogRouter.post("/fetchAllBlogs", blogService.fetchAllBlogs);

blogRouter.post("/fetchBlogByDestination", blogService.fetchBlogByDestination);

blogRouter.post("/fetchBlogComments", blogService.fetchBlogComments);

blogRouter.post("/deleteBlogByID", blogService.deleteBlogByID);

blogRouter.post("/fetchBlogByID", blogService.fetchBlogByID);

blogRouter.post("/addComment", blogService.addComment);

blogRouter.post("/findBlogByUserID", blogService.findBlogByUserID);

module.exports = blogRouter;
