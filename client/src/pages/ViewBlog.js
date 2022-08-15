/**
 * Author: Hrishita Mavani
 * Feature: Blog Management
 * Task: View Blog Task - Display a particular blog
 */
import { Grid } from "@material-ui/core";
import { CommentBank, Send } from "@mui/icons-material";
import { Box, TextField } from "@material-ui/core";
import { deepOrange, grey } from "@mui/material/colors";
import React, { useEffect, useState,useContext } from "react";
import Footer from "../containers/Footer";
import NavBar from "../containers/NavBar";
import { Typography, Avatar } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { BACKEND_URL } from "../config";

/**
 * This Page is used to display a particular blog
 * User would be able to view the blog and also be able to comment on the blog
 * @param {*} req : The request passsed as a parameter to the function blogDB
 * @returns 
 */

function SingleComment({ index, comment, name = "Default name" }) {
  
  return (
    <Box
      key={index}
      component={'div'}
      className="d-flex flex-row justify-content-start align-items-start my-3 align-items-start"
    >
      <Box component={'div'}>
      <Avatar sx={{ bgcolor: deepOrange[500], mx: 1.4 }}>{(comment && comment.author_id) ? comment.author_id[0] : ''}</Avatar>      </Box>
      <Box component={'div'} className="d-flex flex-column">
        <Box component={'div'} className="d-flex flex-column">
          <Typography variant={"p"} fontSize={"1rem"} color={"#292929"}>
            {comment.author_id}
          </Typography>
       
        </Box>
        <Typography className="my-2">{comment.comment_text}</Typography>
      </Box>
    </Box>
  );
}

function ViewBlog() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [blog, setBlog] = useState()
  const auth = useContext(AuthContext);  
  const userId = auth.userId ? auth.userId : "";

  let params = useParams()
  const fetchBlog = async () => {
    let res = await axios({
      method: "POST",
      url: `${BACKEND_URL}/bg/fetchBlogByID`,
      data: {
        blog_id: params['id']
      }
    })
    setBlog(res.data[0])
    setComments(res.data[0].comments)
  }
  useEffect(() => {
    fetchBlog()
  }, [])

  const handleSubmit = async () => {

    let newComments = [...comments, {

      comment_id: Math.random() * 50000,
        blog_id: blog.blog_id,
        comment_text: comment,
        author_id: userId
    }];
    await axios({
      method: 'POST',
      url: `${BACKEND_URL}/bg/addComment`,
      data: {
        comment_id: Math.random() * 50000,
        blog_id: blog.blog_id,
        comment_text: comment,
        author_id: userId
      }
    })
    setComments(newComments);
    setComment("");
  };
  return (
    <Grid container spacing={3}>
       <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Box component={'div'} className="container p-4">
        <Box component={'div'} className="d-flex flex-column justify-content-center align-items-center">
          <Box>
            <Box
              component={'img'}
              className={'className="img-fluid"'}
              alt="image3"
              lg={8}
              height="300px"
              src={blog && blog.image ? blog.image : "https://images.unsplash.com/photo-1657700099387-f11fe97ad6a8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzgxMjEzMg&ixlib=rb-1.2.1&q=80&w=750"}
            />
          </Box>
          <Box>
            <Typography variant="body1" fontWeight={"600"} color={grey[700]}>
              Author: {blog? blog.author_id : ''}
            </Typography>
          </Box>

          <Box className="align-self-start" component={'div'}>
            <Typography variant="h4">{blog ? blog.title : ""}</Typography>
          </Box>

          <Box component={'div'} className="my-3">
            <Typography
              variant="p"
              color={"#292929"}
              style={{ color: "#292929", fontSize: "1.1rem" }}
            >
              {blog ? blog.content : ''}
            </Typography>
          </Box>

          <Box style={{ width: "100%" }}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <CommentBank sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                id="input-with-sx"
                label="Add Your Comment"
                variant="standard"
                fullWidth
              />
              <Send
                onClick={handleSubmit}
                sx={{
                  color: "action.active",
                  ml: 1,
                  my: 0.5,
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
          <Box component={'div'} className="align-self-start my-3">
            {comments.map((comment, index) => {
              return <SingleComment comment={comment} index={index} />;
            })}
          </Box>
        </Box>
      </Box>
      <Footer/>
   </Grid>
  );
}

export default ViewBlog;
