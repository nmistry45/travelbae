/**
 * Author: All
 * Feature: Generic
 * Task: Display Home Page
 */
import React, { useContext, useState } from "react";
import {
  Grid,
  Link,
  Typography,
  makeStyles,
  Card,
  CardMedia,
} from "@material-ui/core";
import CardCarousel from "../containers/CardCarousel";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import SearchBoxComp from "../components/SearchBox";
import Divider from "@mui/material/Divider";
import {
  destinationData,
  accCards2,
  accCards,
} from "../containers/CardCont/mockData";
import Footer from "../containers/Footer";
// Home page
import AlertDialog from "../containers/AlertDialog";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";

/**
 * This Page is responsible for displaying the Homepage of our application.
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
const HomePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false); // for alert box
  const [searchInput, setSearchInput] = useState("");
  const auth = useContext(AuthContext);

  const handleOpen = (link, type) => {
    if (type === "accommodation") {
      history.push(link);
    }
    if (type === "blogs") {
      history.push(link);
    }
    if (type === "destination") {
      history.push("/destinations");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (link, type) => {
    if (type === "accommodation") {
      history.push(link);
    }
    if (type === "blogs") {
      history.push(link);
    }
    if (type === "destination") {
      history.push(link);
    }
  };

  const handleEvent = (event) => {
    setSearchInput(event);
    history.push("/destinations/" + event);
  };

  const displayStrip = (title, cards, link, type) => {
    const data = cards;
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
            <Grid item xs={2}>
              <Box pt={4} pr={2} display="flex" justifyContent="flex-end">
                <Button onClick={() => handleOpen(link, type)}>View All</Button>
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
            {data.map((card) => {
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
                    onClick={() => handleClick(`${link}/${card.city}`, type)}
                  >
                    <CardMedia
                      component="img"
                      alt={title}
                      height="300"
                      image={card.img}
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
            {/* <ImageList /> */}
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
      <Grid item xs={12}>
        <CardCarousel hasImgText="true" />
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <SearchBoxComp onEvent={handleEvent} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pb={4} display="flex" justifyContent="center">
          {" "}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {" "}
            Begin Your Adventure With Us
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box pl={20} pr={20} sx={{ color: "grey", fontStyle: "italic" }}>
            <Typography variant="h6" textAlign="center">
              Confused where to start from or just looking for suggestions on
              destination. This is the right place to get all the information
              you want. Make your experience smooth by exlporing information and
              advice from travellers!
            </Typography>
          </Box>
        </Box>
      </Grid>
      {displayStrip(
        "Popular Places",
        destinationData,
        "/destination",
        "destination"
      )}
      {/* {displayStrip("Travel Blogs", blogCards, "/blog-list", "blogs")} */}
      {displayStrip(
        "Accommodations",
        accCards,
        "/accommodation",
        "accommodation"
      )}
      {displayStrip(
        "Most Visited",
        accCards2,
        "/accommodation",
        "accommodation"
      )}
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

export default HomePage;
