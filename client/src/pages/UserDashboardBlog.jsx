/**
 * Author: Smriti Mishra
 * Feature: UserDashboard Blog Page
 ** Description: On this page, logged-in users will find a list of all the blogs written
 */
import React, { useEffect, useContext, useState } from "react";
import "./../components/UserDashboard/Dashboard.css";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import { Grid, Snackbar } from "@material-ui/core";
import {
  Alert,
  Box,
  Button,
  CardActionArea,
  CssBaseline,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { AuthContext } from "../context/AuthContext";

/**
 * This Page is responsible for displaying the user dashboard Blog Page.
 * @param {*} props 
 * @returns 
 */

function UserDashbordBlog() {
  const history = useHistory();
  const [blogs, setBlogs] = React.useState([]);
  const auth = useContext(AuthContext);
  const [showSnackbar, setShowSnackbar] = useState(false);

  let id = null;

  if (auth && auth.isLoggedIn == true && auth.userId != null) {
    id = auth.userId;
  } else {
    id = "test@gmail.com";
  }

  if (!auth.userProfileData.length) {
    auth.loadUserProfile();
  }
  const userData = auth.userProfileData.length ? auth.userProfileData[0] : {};

  const handleClick = () => {
    history.push("/write-blog");
  };
  const findBlogByUserID = async () => {
    let res = await axios({
      method: "post",
      url: `${BACKEND_URL}/bg/findBlogByUserID`,
      data: { author_id: id },
    });
    setBlogs(res.data);
  };
  useEffect(() => {
    findBlogByUserID();
  }, []);
  const theme = useTheme();

  const handleDelete = async (id) => {
    let res = await axios({
      method: "post",
      url: `${BACKEND_URL}/bg/deleteBlogByID`,
      data: {
        blog_id: id,
      },
    });
    setShowSnackbar(true);
  };
  const goToBlog = (id) => {
    history.push(`/view-blogs/${id}`);
  };
  const displayCard = (blog) => {
    return (
      <Grid item xs={12}>
        <Box component={"div"}>
          <Snackbar
            open={showSnackbar}
            autoHideDuration={6000}
            onClose={() => {
              setShowSnackbar(false);
              findBlogByUserID();
            }}
          >
            <Alert
              onClose={() => {
                setShowSnackbar(false);
              }}
              severity="success"
              sx={{ width: "100%" }}
            >
              Deleted Successfully
            </Alert>
          </Snackbar>
        </Box>
        <Paper sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }} onClick={() => goToBlog(blog.blog_id)}>
            <img
              src={
                blog.image
                  ? blog.image
                  : "https://images.pexels.com/photos/6965273/pexels-photo-6965273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width="200rem"
              alt="Blog Image"
            />
          </Box>

          <Box
            sx={{ display: "flex", flexDirection: "column", padding: 2 }}
            onClick={() => goToBlog(blog.blog_id)}
          >
            <Typography component="div" variant="h5">
              {blog.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {userData.fname} {userData.lname}
            </Typography>
            <Typography>{blog.content.substring(0, 10)}</Typography>
          </Box>
          <Box>
            <DeleteIcon
              color="primary"
              onClick={() => {
                handleDelete(blog.blog_id);
              }}
            />
          </Box>
        </Paper>
      </Grid>
    );
  };

  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} lg={3}>
        <SideBar />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box pl={3} mt={4} pb={3} display="flex">
          <Paper sx={{ width: "100%" }}>
            <Grid container>
              <Grid item lg={6}>
                <Box pt={2} pl={4}>
                  <Typography variant="h4" component="span">
                    My Blogs
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box pt={2} pr={4} display="flex" justifyContent="flex-end">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClick}
                  >
                    Create Blog
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box pl={2} pt={2} pb={2} pr={2}>
              <Divider />
            </Box>
            <Box ml={2} pl={2} pt={3} pb={3} mr={3}>
              <Grid container flexDirection="column" spacing={2}>
                {blogs.map((blog) => {
                  return displayCard(blog);
                })}
                {blogs.length === 0 && (
                  <div>
                    <p sx={{ marginLeft: "1rem !important" }}>
                      Blog list is empty.
                    </p>
                  </div>
                )}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default UserDashbordBlog;
