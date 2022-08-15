/**
 * Author: Nishit Mistry
 * Feature: Trip Planner
 * Task: Customized Trip Form
 */
import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import NavBar from "../../containers/NavBar";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import VillaIcon from "@mui/icons-material/Villa";
import HikingIcon from "@mui/icons-material/Hiking";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useLocation } from "react-router-dom";
// import data from "./mockData";

/**
 * Renders the my plan page which opens after clicking on a particular page from the user dashboard
 * @param {*} title
 * @param {*} data
 * @param {*} icon
 * @returns
 */
const displayPaper = (title, data, icon) => {
  return (
    <>
      <Grid item xs={12}>
        <Box pl={1} pr={1}>
          <Box display={"inline-flex"} pt={2}>
            <Box pr={1}>
              <Typography>{icon}</Typography>
            </Box>
            <Typography variant="h5" fontWeight={550}>
              {title}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{
            margin: "20px",
          }}
        >
          {title === data.plan_name.toUpperCase() && (
            <>
              <Box display={"inline-flex"} width="100%" pb={1} pt={1}>
                <Typography variant="h5" fontWeight={600}>
                  Plan Name:
                </Typography>
                <Typography variant="h5">&nbsp;</Typography>
                <Typography variant="h5">{data.plan_name}</Typography>
              </Box>
              <Box display={"inline-flex"} width="100%" pb={1}>
                <Typography variant="h5" fontWeight={600}>
                  Location:
                </Typography>
                <Typography variant="h5">&nbsp;</Typography>
                <Typography variant="h5">{data.city}</Typography>
              </Box>
              <Box display={"inline-flex"} width="100%" pb={1}>
                <Typography variant="h5" fontWeight={600}>
                  Travel Partner:
                </Typography>
                <Typography variant="h5">&nbsp;</Typography>
                <Typography variant="h5">{data.travel_partner}</Typography>
              </Box>
              <Box display={"inline-flex"} width="100%" pb={1} pt={1}>
                <Typography variant="h5" fontWeight={550}>
                  Start Date:
                </Typography>
                <Typography variant="h5">&nbsp;</Typography>
                <Typography variant="h5">
                  {data.start_date && data.start_date.substring(0, 10)} -
                </Typography>
                <Typography variant="h5">&nbsp;</Typography>
                <Typography variant="h5" fontWeight={550}>
                  End Date:
                </Typography>
                <Typography variant="h5">&nbsp;</Typography>
                <Typography variant="h5">
                  {data.end_date && data.end_date.substring(0, 10)}
                </Typography>
              </Box>
            </>
          )}
          {title === "ACCOMMODATION" &&
            data.accommodation.map((acc) => {
              return (
                <>
                  <Box display={"inline-flex"} width="100%" pb={1} pt={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Hotel Name:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{acc.hotel_name}</Typography>
                  </Box>
                  <Box display={"inline-flex"} width="100%" pb={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Location:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{acc.address}</Typography>
                  </Box>
                  <Box display={"inline-flex"} width="100%" pb={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Price:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{acc.price}</Typography>
                  </Box>
                </>
              );
            })}
          {title === "ACTIVITIES TO DO" &&
            data.activity.map((act) => {
              return (
                <>
                  <Box display={"inline-flex"} width="100%" pb={1} pt={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Activity Name:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{act.activity_name}</Typography>
                  </Box>
                  <Box display={"inline-flex"} width="100%" pb={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Location:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{act.activity_address}</Typography>
                  </Box>
                  <Box display={"inline-flex"} width="100%" pb={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Price:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{act.price}</Typography>
                  </Box>
                </>
              );
            })}
          {title === "TRANSPORTATION" &&
            data.transportation.map((tra) => {
              return (
                <>
                  <Box display={"inline-flex"} width="100%" pb={1} pt={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Source:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{tra.source} -</Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5" fontWeight={550}>
                      Destination:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{tra.dest_name}</Typography>
                  </Box>
                  <Box display={"inline-flex"} width="100%" pb={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Flight Company:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{tra.flight_company}</Typography>
                  </Box>
                  <Box display={"inline-flex"} width="100%" pb={1} pt={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Start Date:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">
                      {tra.start_date && tra.start_date.substring(0, 10)} -
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5" fontWeight={550}>
                      End Date:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">
                      {tra.return_date && tra.return_date.substring(0, 10)}
                    </Typography>
                  </Box>
                  <Box display={"inline-flex"} width="100%" pb={1}>
                    <Typography variant="h5" fontWeight={550}>
                      Price:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">{tra.price}</Typography>
                  </Box>
                </>
              );
            })}
        </Paper>
      </Grid>
    </>
  );
};

const MyPlan = (props) => {
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/pt/findPlanTripByPlanID`;
    const planIDReq = {
      plan_id: location.state.plan_id,
    };
    axios
      .post(fetchURL, planIDReq)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Box
          component="img"
          sx={{
            height: "500px",
            width: "100%",
          }}
          title="Trip Planning"
          alt="Plan your Trip"
          src="https://www.switchbacktravel.com/sites/default/files/images/articles/Travel%20photo%20airplane.jpg"
        />
      </Grid>
      {/* @Todo: Take data from mockdata and print in grid item */}
      {data.plan_name &&
        displayPaper(
          data.plan_name.toUpperCase(),
          data,
          <TravelExploreIcon fontSize="large" color="secondary" />
        )}
      {Object.keys(data).length !== 0 &&
        data.accommodation.length !== 0 &&
        displayPaper(
          "ACCOMMODATION",
          data,
          <VillaIcon fontSize="large" color="secondary" />
        )}
      {Object.keys(data).length !== 0 &&
        data.activity.length !== 0 &&
        displayPaper(
          "ACTIVITIES TO DO",
          data,
          <HikingIcon fontSize="large" color="secondary" />
        )}
      {Object.keys(data).length !== 0 &&
        data.transportation.length !== 0 &&
        displayPaper(
          "TRANSPORTATION",
          data,
          <FlightTakeoffIcon fontSize="large" color="secondary" />
        )}
    </Grid>
  );
};
export default MyPlan;
