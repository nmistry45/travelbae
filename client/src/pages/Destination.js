/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Display Destination Information
 */
import { makeStyles, Card, CardMedia } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../containers/NavBar";
import { Grid, Box, Typography, Divider, Button } from "@mui/material";
import Footer from "../containers/Footer";
import { useHistory } from "react-router-dom";
import GoogleMap from "./../components/GoogleMap/index";
import AlertDialog from "../containers/AlertDialog";
import axios from "axios";
import { BACKEND_URL } from "../config";

/**
 * This Page is responsible for showing the availaible destinations to the users.
 * @param {*} props 
 * @returns 
 */

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)", cursor: "pointer" },
    marginBottom: "10%",
  },
  font: {
    position: "absolute",
    top: "80%",
    left: "10%",
    color: "white",
    backgroundColor: "none",
    fontFamily: "Comic Sans MS",
    textAlign: "center",
  },
}));

/**
 *
 * @returns
 */
const Destination = () => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();

  const [open, setOpen] = useState(false); // for alert box
  const [destinationName, setDestinationName] = useState("");
  const [destinationDescription, setDestinationDescription] = useState("");
  const [destinationImage, setDestinationImage] = useState("");
  const [blogCards, setBlogCards] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: 44.62, lng: -63.57 });

  useEffect(() => {
    const fetchDestinationURL = `${BACKEND_URL}/destination/fetchDestinationByCode/${params.code}`;
    axios
      .get(fetchDestinationURL)
      .then((res) => {
        setCoordinates({
          lat: parseFloat(res.data.destinations.latitude),
          lng: parseFloat(res.data.destinations.longitude),
        });
        setDestinationName(res.data.destinations.dest_name);
        setDestinationDescription(res.data.destinations.dest_desc);
        setDestinationImage(res.data.destinations.img);
      })
      .catch((err) => console.log(err));

    const fetchBlogsURL = `${BACKEND_URL}/bg/fetchBlogByDestination`;
    axios
      .post(fetchBlogsURL, {
        destination_tag: params.code,
      })
      .then((res) => {
        setBlogCards(res.data);
      });
  }, []);

  const handleListItemClick = (navigationLink, type) => {
    if (type === "blogs") {
      history.push(navigationLink);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleViewAccomodation = () => {
    history.push("/accommodation/" + destinationName);
  };
  const displayStrip = (title, cards, navigationLink, type) => {
    // const data = cards;
    return (
      <>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={10}>
              <Box pl={2} pt={4}>
                <Typography fontFamily="Nothing You Could Do" variant="h5">
                  {title}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box pb={4}>
            <Divider />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            {cards &&
              cards.map((card) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    style={{ textAlign: "center" }}
                  >
                    <Card
                      className={classes.root}
                      onClick={() => {
                        handleListItemClick(
                          `${navigationLink}/${card.blog_id}`,
                          "blogs"
                        );
                      }}
                    >
                      <CardMedia
                        component="img"
                        alt={title}
                        height="300"
                        image={card.image}
                        title={title}
                      />
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h6"
                        className={classes.font}
                      >
                        {card.title}
                      </Typography>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </>
    );
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ padding: "1em 3em" }}>
            <Grid container>
              <Grid item sm={12}>
                <Box sx={{ height: "25em", marginBottom: "1em" }}>
                  <img
                    src={destinationImage}
                    height={"100%"}
                    alt="image4"
                    width={"100%"}
                  ></img>
                </Box>
              </Grid>
              <Grid item sm={12} md={9}>
                <Box sx={{ margin: "0px 10px 20px" }}>
                  <Typography variant="h4" color="primary">
                    {destinationName}
                  </Typography>
                  <Typography variant="body2" color="default">
                    {destinationDescription}
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleViewAccomodation}
                    sx={{ height: "3em", marginTop: "1em" }}
                  >
                    <Typography p={1}>View Accommodations</Typography>
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sx={{ padding: "0em 0.5em" }}>
                <GoogleMap
                  coordinates={coordinates}
                  label={{ color: "black", text: "" + destinationName }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ padding: "1em 3em" }}>
            {blogCards.length > 0 ? (
              displayStrip("Travel Blogs", blogCards, "/view-blogs")
            ) : (
              <></>
            )}
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
      <Grid item xs={12}>
        <AlertDialog
          open={open}
          title="Confirm"
          message="API logic required to View"
          handleClose={handleClose}
          buttons={["Cancel", "Ok"]}
        />
      </Grid>
    </Grid>
  );
};
export default Destination;
