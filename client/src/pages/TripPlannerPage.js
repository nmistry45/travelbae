/**
 * Author: Nishit Mistry
 * Feature: Trip Planner Page
 * Task: Trip planner Page
 */
import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@mui/material/TextField";
import { Grid } from "@material-ui/core";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Fade from "@mui/material/Fade";
import { Button, Box, Autocomplete } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

/**
 * This Page is responsible for allowing user to plan the trip.
 * @param {*} props 
 * @returns 
 */

const TripPlannerPage = () => {
  const [searchDest, setSearchDest] = useState({
    dest_name: "Search Destination",
  });
  const [startDate, setStartDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data, setData] = useState([]);
  const [validation, setValidation] = useState("");
  const history = useHistory();

  const handleStartDate = (e) => {
    setValidation("");
    setStartDate(e.target.value);
  };

  const handleToDate = (e) => {
    setValidation("");
    setToDate(e.target.value);
  };

  const tripPlannerData = {
    dest_name: searchDest
      ? searchDest.dest_name
      : { dest_name: "Search Destination" },
    start_date: startDate,
    end_date: toDate,
  };
  const handleClick = () => {
    if (!toDate) {
      setValidation("All fields are required");
      return;
    } else {
      setValidation("");
    }
    if (!startDate) {
      setValidation("All fields are required");
      return;
    } else {
      setValidation("");
    }

    if (searchDest && searchDest.dest_name === "Search Destination") {
      setValidation("All fields are required");
      return;
    } else {
      setValidation("");
    }

    history.push({
      pathname: "/trip-planner/plan",
      state: { ...tripPlannerData },
    });
  };

  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/destination/fetchDestinationOnTripPlanner`)
      .then((res) => {
        setData(res.data.destinations);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const destOption = {
    options: data,
    getOptionLabel: (option) => option && option.dest_name,
  };

  return (
    <Fade in={true}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              bgcolor: "#e0ffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: "6%",
              pb: "6%",
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12} sm={8} md={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h4">Customized Trip Planner</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Box pt={2}>
                  {destOption && (
                    <>
                      <Autocomplete
                        {...destOption}
                        id="debug"
                        debug
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="secondary"
                            label="Search Destination"
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                            variant="outlined"
                            fullWidth
                            required
                          />
                        )}
                        value={searchDest}
                        onChange={(event, value) => setSearchDest(value)}
                      />
                    </>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box pl={2} textAlign="center" pr={2} pt={3}>
                  <TextField
                    color="secondary"
                    required
                    sx={{ marginRight: "1rem" }}
                    id="date_from"
                    label="From"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleStartDate(e)}
                  />

                  <TextField
                    color="secondary"
                    required
                    id="date_to"
                    label="To"
                    type="date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleToDate(e)}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Box
                  pr={2}
                  pt={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button variant="contained" onClick={handleClick}>
                    Start Your Planning
                  </Button>
                </Box>
                {validation && (
                  <Box display="flex" justifyContent="center" pt={3}>
                    <Typography
                      variant="caption"
                      style={{ color: "red" }}
                      textAlign="center"
                    >
                      All fields are required
                    </Typography>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default TripPlannerPage;
