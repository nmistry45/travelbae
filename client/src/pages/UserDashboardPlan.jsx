/**
 * Author: Smriti Mishra
 * Feature: UserDashboard Plan Page
 * Description: On this page, logged-in users will find a list of all the plans that have been finished as well as those that are upcomings.
 */
import React, { useEffect, useContext, useState } from "react";
import "./../components/UserDashboard/Dashboard.css";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import SideBar from "../components/SideBar/Sidebar";
import { Grid } from "@material-ui/core";
import axios from "axios";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { planData } from "../containers/CardCont/mockData";
import { completedPlanData } from "../containers/CardCont/mockData";
import { AuthContext } from "../context/AuthContext";
import Checkbox from "@mui/material/Checkbox";
import { BACKEND_URL } from "../config";
import AlertDialog from "../containers/AlertDialog";

/**
 * This Page is responsible for displaying the user dashboard Plan Page.
 * @param {*} props 
 * @returns 
 */


function UserDashbordPlan() {
  const auth = useContext(AuthContext);
  let id = null;

  if (auth && auth.isLoggedIn == true && auth.userId != null) {
    id = auth.userId;
  } else {
    id = "test@gmail.com";
  }

  const history = useHistory();
  const [UpcomingPlanTrip, setUpcomingPlanTrip] = React.useState([]);
  const [CompletedPlanTrip, setCompletedPlanTrip] = React.useState([]);
  const [open, setOpen] = useState(false); // for alert box

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteAlert = () => {
    setOpen(true);
  };

  const handleDelete = (id) => {
    axios({
      method: "post",
      url: `${BACKEND_URL}/pt/deletePlanTripByID`,
      data: {
        plan_id: id,
      },
    })
      .then((res) => {
        fetchAllPlanTrips();
      })
      .catch((error) => console.log(error));
  };

  const handleClick = (plan_ids) => {
    if (plan_ids)
      history.push({
        pathname: "/myPlan",
        state: { plan_id: plan_ids },
      });
  };

  const handleComplete = (id) => {
    axios({
      method: "post",
      url: `${BACKEND_URL}/pt/updatePlanTripByID`,
      data: {
        plan_id: id,
      },
    })
      .then((res) => {
        fetchAllPlanTrips();
      })
      .catch((error) => console.log(error));
  };

  const fetchAllPlanTrips = async () => {
    let res = await axios({
      method: "POST",
      url: `${BACKEND_URL}/pt/findPlanTripByUserID/` + id,
    });

    let locData = await axios({
      method: "GET",
      url: `${BACKEND_URL}/destination/fetchAllDestinations`,
    });

    let finalUpcomingData = Array();
    let finalCompletedData = Array();

    res.data.map((cities) => {
      for (let i = 0; i < locData.data.destinations.length; i++) {
        if (locData.data.destinations[i].dest_name === cities.city) {
          if (cities.is_completed === false) {
            locData.data.destinations[i].res = cities;
            finalUpcomingData.push(locData.data.destinations[i]);
            return true;
          } else {
            locData.data.destinations[i].res = cities;
            finalCompletedData.push(locData.data.destinations[i]);
            return true;
          }
        }
      }
    });

    setUpcomingPlanTrip(finalUpcomingData);
    setCompletedPlanTrip(finalCompletedData);
  };

  useEffect(() => {
    fetchAllPlanTrips();
  }, []);

  const theme = useTheme();

  const displayCard = (plan) => {
    return (
      <Grid item xs={12}>
        <Paper sx={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            <img
              src={plan.img}
              width="200rem"
              alt="Plan Image"
              onClick={() => handleClick(plan.res.plan_id)}
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column", padding: 2 }}
            // onClick={handleClick}
          >
            <Typography component="div" variant="h5">
              {plan.res.plan_name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {plan.res.start_date &&
                plan.res.start_date.substring(0, 10) +
                  " - " +
                  plan.res.end_date.substring(0, 10)}
            </Typography>
            <Typography>{plan.dest_desc}</Typography>

            <Box>
              {plan.res.is_completed === false && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    handleComplete(plan.res.plan_id);
                  }}
                >
                  Complete Trip
                </Button>
              )}
            </Box>
          </Box>

          <Box>
            <DeleteIcon
              color="primary"
              cursor="pointer"
              onClick={() => {
                handleDelete(plan.res.plan_id);
                // deleteAlert();
              }}
            />
            {/* {if(plan.res.is_completed===true)} */}
            {/* <Checkbox
              onClick={() => {
                handleComplete(plan.res.plan_id);
              }}
            /> */}
            {/* <Grid item lg={9}>
              <Box pt={2} pr={4} display="flex" justifyContent="flex-end">
                <Button variant="outlined" color="primary">
                  Completed
                </Button>
              </Box>
            </Grid> */}
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
                  <Typography variant="h5" component="span">
                    Upcoming Plans
                  </Typography>
                </Box>
              </Grid>
              {/* <Grid item lg={6}>
                <Box pt={2} pr={4} display="flex" justifyContent="flex-end">
                  <Button variant="outlined" color="primary">
                    Create Plan
                  </Button>
                </Box>
              </Grid> */}
            </Grid>
            <Box pl={2} pt={2} pb={2} pr={2}>
              <Divider />
            </Box>
            <Box ml={4} pl={2} pt={3} pb={3} mr={3}>
              <Grid container flexDirection="column" spacing={2}>
                {UpcomingPlanTrip.map((plan) => {
                  return displayCard(plan);
                })}
                {UpcomingPlanTrip.length === 0 && (
                  <div>
                    <p sx={{ marginLeft: "1rem !important" }}>
                      Plans list is empty.
                    </p>
                  </div>
                )}
              </Grid>
            </Box>
            <Grid item lg={6}>
              <Box pt={2} pl={4}>
                <Typography variant="h5" component="span">
                  Plans Completed
                </Typography>
              </Box>
            </Grid>
            <Box pl={2} pt={2} pb={2} pr={2}>
              <Divider />
            </Box>
            <Box ml={4} pl={2} pt={3} pb={3} mr={3}>
              <Grid container flexDirection="column" spacing={2}>
                {CompletedPlanTrip.map((plan) => {
                  return displayCard(plan);
                })}
                {CompletedPlanTrip.length === 0 && (
                  <div>
                    <p sx={{ marginLeft: "1rem !important" }}>
                      Plans list is empty.
                    </p>
                  </div>
                )}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <AlertDialog
          open={open}
          title="Delete Plan"
          message="Are you sure you want to delete this plan ?"
          handleClose={handleClose}
          buttons={[
            { label: "No", func: handleClose },
            { label: "Yes", func: handleClose },
          ]}
        />
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default UserDashbordPlan;
