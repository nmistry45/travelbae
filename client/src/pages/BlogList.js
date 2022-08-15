/**
 * Author: Hrishita Mavani
 * Feature: Blog Management
 * Task: View Blog Task - User can view the blogs
 */

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Footer from "../containers/Footer";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { deepOrange } from "@mui/material/colors";
import Avatar from "@material-ui/core/Avatar";
import NavBar from "../containers/NavBar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Search } from "@material-ui/icons";
import { BACKEND_URL } from "../config";

/**
 * This page is used to display list of blogs
 * User would be able to click on a particular blog and be redirected to the blog page
 * User would be able to search for a particular blog
 */
const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/6965513/pexels-photo-6965513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    width: "100vw",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },

  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
    width: "auto",
    marginLeft: "2rem",
    marginRight: "2rem",
    marginTop: "2rem",
    width: "18rem",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function BlogList() {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (e, id) => {
    history.push("view-blogs/" + id);
  };
  const [blogs, setBlogs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const fetchAllBlogs = async () => {
    let res = await axios({
      method: "post",
      url: `${BACKEND_URL}/bg/fetchAllBlogs`,
    });
    setBlogs(res.data);
    setFiltered(res.data);
  };
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value != "") {
      setFiltered(
        blogs.filter((blog) => {
          if (blog.title.includes(e.target.value)) return true;
          else return false;
        })
      );
    } else {
      setFiltered(blogs);
    } 
  };
  useEffect(() =>  {
    fetchAllBlogs();
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid>
        <Grid>
          <Box className={classes.hero}>
            <Box>
              <Typography variant="h1" component="h2">
                Blogs
              </Typography>
            </Box>
          </Box>
          <Box
            component={"div"}
            className="d-flex flex-row align-items-center justify-content-center mx-4"
          >
            <Search className="mx-2" />
            <Box
              component={"input"}
              placeholder={"Search here"}
              onChange={onSearchChange}
              value={search}
              type="text"
              className="form-control my-3 mx-2"
            />
          </Box>
          <Container maxWidth="lg" className={classes.blogsContainer}>
            <Grid container spacing={2}>
              <Box item xs={12} sm={6} md={4} className="d-flex flex-row flex-wrap justify-content-center align-items-center my-3"> 
                {filtered.map((blog, index) => {
                  return (
                    <Card
                      key={index}
                      className={classes.card}
                      onClick={(e) => {
                        handleClick(e, blog.blog_id);
                      }}
                    >
                      <CardActionArea>
                        <Box
                          component={"img"}
                          className={classes.media}
                          src={
                            blog && blog.image
                              ? blog.image
                              : "https://images.pexels.com/photos/6965273/pexels-photo-6965273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          }
                          title={blog.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {blog.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {blog.content.substring(0, 10)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.cardActions}>
                        <Box className={classes.author}>
                        <Avatar sx={{ bgcolor: deepOrange[500], mx: 1.4 }}>{(blog && blog.author_id) ? blog.author_id[0] : ''}</Avatar>  

                          <Box ml={2}>
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                              component="p"
                            >
                              {blog.author_id}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              color="textSecondary"
                              component="p"
                            >
                              {blog.date}
                            </Typography>
                          </Box>
                        </Box>
                      </CardActions>
                    </Card>
                  );
                })}
              </Box>
            </Grid>
            {/* <Grid container justifyContent="center" sx={{ mt: 3, mb: 2 }}>
                <Stack spacing={2}>
                  <Pagination
                    count={count}
                    color="primary"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange1}
                  />
                </Stack>
              </Grid> */}
            {/* <Box my={4} className={classes.paginationContainer}>
              <Pagination count={10} />
            </Box> */}
          </Container>
        </Grid>
      
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default BlogList;

