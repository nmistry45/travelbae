/**
 * Author: Smriti Mishra
 * Feature: On this page, logged-in users will find a list of all the flags they have collected or will be collected after the trip completion
 */
import {
  Grid,
  Typography,
  Box,
  CardActions,
  useForkRef,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import React, { useState, useContext, useEffect } from "react";
import NavBar from "../containers/NavBar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Divider } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SideBar from "../components/SideBar/Sidebar";
import { AuthContext } from "../context/AuthContext";
import { BACKEND_URL } from "../config";
import { flagdata } from "../containers/CardCont/mockData";

//MockData
import canada from "../assets/flags/canada.jpg";
import india from "../assets/flags/india.jpg";
import usa from "../assets/flags/usa.jpg";
import france from "../assets/flags/france.jpg";
import uk from "../assets/flags/uk.jpg";
import thailand from "../assets/flags/thailand.jpg";

import Footer from "../containers/Footer";
import axios from "axios";

/**
 * This Page is responsible for displaying the user dashboard Flag Page.
 * @param {*} props 
 * @returns 
 */

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "contain",
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    paddingBottom: "1rem",
    cursor: "pointer",
  },
  media: {
    objectFit: "scale-down",
    height: "50%",
    alignItems: "center",
    width: "50%",
  },
  actionArea: {
    display: "flex",
  },
  cardFooter: {
    justifyContent: "center",
  },
}));

const UserDashbordFlag = () => {
  const imgPaths = {
    "../../assets/flags/france.jpg": france,
    "../../assets/flags/canada.jpg": canada,
    "../../assets/flags/usa.jpg": usa,
    "../../assets/flags/india.jpg": india,
    "../../assests/flags/uk.jpg": uk,
    "../../assests/flags/thailand.jpg": thailand,
  };

  const auth = useContext(AuthContext);

  const [data, setData] = useState([
    {
      category: "Collected Flags",
      itemList: [],
    },
    {
      category: "Upcoming Flags To Be Collected",
      itemList: [],
    },
  ]);

  let id = null;

  if (auth && auth.isLoggedIn == true && auth.userId != null) {
    id = auth.userId;
  } else {
    id = "test@gmail.com";
  }

  // const [NotCollectedFlag, setNotCollectedFlagData] = React.useState([]);
  // const [CollectedFlag, setCollectedFlagData] = React.useState([]);

  const classes = useStyles();

  const checkIfExist = (arr, name) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === name) return true;
    }
    return false;
  };

  const fetchAllPlanTrips = async () => {
    const mockDataFlag = flagdata;

    let res = await axios({
      method: "POST",
      url: `${BACKEND_URL}/pt/findPlanTripByUserID/` + id,
    });

    let finalUpcomingData = Array();
    let finalCompletedData = Array();

    res.data.map((cities) => {
      for (let i = 0; i < mockDataFlag.length; i++) {
        for (let j = 0; j < cities.accommodation.length; j++) {
          if (mockDataFlag[i].country === cities.accommodation[j].country) {
            if (cities.is_completed === true) {
              mockDataFlag[i].res = cities;

              if (!checkIfExist(finalUpcomingData, mockDataFlag[i].country))
                finalUpcomingData.push({
                  name: mockDataFlag[i].country,
                  image: mockDataFlag[i].flag_image,
                });
              console.log(finalUpcomingData);
            } else {
              mockDataFlag[i].res = cities;
              if (!checkIfExist(finalCompletedData, mockDataFlag[i].country))
                finalCompletedData.push({
                  name: mockDataFlag[i].country,
                  image: mockDataFlag[i].flag_image,
                });
            }
          }
        }
      }
    });

    setData([
      {
        category: "Collected Flags",
        itemList: finalUpcomingData,
      },
      {
        category: "Upcoming Flags To Be Collected",
        itemList: finalCompletedData,
      },
    ]);
  };

  useEffect(() => {
    fetchAllPlanTrips();
  }, []);

  const displayCards = (name, img) => {
    let image = imgPaths[img];
    return (
      <Card className={classes.root} key={name}>
        {image && (
          <CardMedia className={classes.actionArea}>
            <CardMedia
              className={classes.media}
              component="img"
              image={image}
              style={{ margin: "auto", width: "50%", height: "10vh" }}
              // src={image}
              alt={name}
            />
          </CardMedia>
        )}
        <CardActions className={classes.cardFooter}>
          <Typography gutterBottom component="div">
            {name}
          </Typography>
        </CardActions>
      </Card>
    );
  };
  return (
    <Grid spacing={2} container mt={2}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} sx={{ overflow: "hidden" }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={3}>
            <SideBar />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Box display="inline-flex">
                  <Typography variant="h5">Flags Collected</Typography>
                  <Box
                    sx={{
                      display: { xs: "flex", lg: "none" },
                    }}
                  ></Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box pb={2}>
                  <Divider
                    variant="middle"
                    sx={{ borderBottomWidth: 3, background: "black" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    width: "auto",
                    height: "auto",
                    backgroundColor: "white",
                    marginLeft: "2rem",
                    marginRight: "2rem",
                  }}
                ></Box>
              </Grid>
              {data.map((dataObj) => {
                return (
                  <>
                    <Grid item xs={12}>
                      <Box
                        display="inline-flex"
                        paddingLeft={4}
                        sx={{ fontSize: 24, fontWeight: 500 }}
                      >
                        {dataObj.category}
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    {dataObj.itemList.map((item) => (
                      <Grid
                        item
                        xs={6}
                        sm={4}
                        md={2}
                        lg={2}
                        style={{ marginBottom: 20 }}
                      >
                        {displayCards(item.name, item.image)}
                      </Grid>
                    ))}
                    {dataObj.itemList.length === 0 && (
                      <div>
                        <p sx={{ marginLeft: "1rem !important" }}>
                          Flag list is empty.
                        </p>
                      </div>
                    )}
                  </>
                );
              })}

              <Grid item xs={12}>
                <Box justifyContent="flex-end" display="flex">
                  <Box
                    display="inline-flex"
                    justifyContent="flex-end"
                    paddingRight={4}
                  ></Box>
                  <Box
                    display="inline-flex"
                    justifyContent="flex-end"
                    paddingLeft={2}
                    paddingRight={2}
                  ></Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default UserDashbordFlag;
