/**
 * Author: Nishit Mistry
 * Feature: Trip Planner
 * Task: Customized Trip Form
 */
import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import NavBar from "../../containers/NavBar";
import Footer from "../../containers/Footer";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useHistory, useLocation, Link } from "react-router-dom";
import AddToPlanComp from "../../components/AddToPlan";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import CardCont from "../../containers/CardCont";

/**
 * Renders the itinerary page at the end of the customized form
 * @returns
 */
const Itinerary = () => {
  const [open, setOpen] = useState(false);
  const [cityCards, setCityCards] = useState([]);
  const [geo, setGeo] = useState([]);
  const location = useLocation();
  const history = useHistory();
  let newPlan = {};
  newPlan.plan = { ...location.state, city: location.state.dest_name };
  const tripPlannerData = location.state;
  tripPlannerData.city = location.state.dest_name;
  const cityName = tripPlannerData.dest_name;
  const cityLat = geo.length && geo[0].latitude;
  const cityLong = geo.length && geo[0].longitude;

  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/sit/fetchSpecificItineraries`;
    const specificCityReq = {
      itinerary_place: cityName,
    };
    axios
      .post(fetchURL, specificCityReq)
      .then((res) => {
        setCityCards(res.data);
      })
      .catch((err) => console.log(err));
  }, [cityName]);

  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/it/findItineraryByCity`;
    const specificCityReq = {
      itinerary_city: cityName,
    };
    axios
      .post(fetchURL, specificCityReq)
      .then((res) => {
        setGeo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBack = () => {
    history.push({
      pathname: "/trip-planner/travel",
      state: { ...tripPlannerData },
    });
  };

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Box
            sx={{
              bgcolor: "#e0ffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: "6%",
              pb: "6%",
              mr: 0,
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={2} lg={2}>
                <Box
                  display="flex"
                  sx={{ pl: 2, display: { xs: "none", lg: "block" }, mr: 0 }}
                >
                  <IconButton aria-label="back" onClick={handleBack}>
                    <ArrowBackOutlinedIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} lg={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 2,
                    mr: 0,
                  }}
                >
                  <Typography textAlign="center" variant="h4">
                    Recommended Itineraries
                  </Typography>
                  <Box display="inline-flex" sx={{ pt: 2, pb: 2, mr: 0 }}>
                    <Typography variant="h5" fontWeight={550}>
                      Start Date:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">
                      {tripPlannerData.start_date} -
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5" fontWeight={550}>
                      End Date:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">
                      {tripPlannerData.end_date}
                    </Typography>
                  </Box>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                  >
                    {cityCards.length &&
                      cityCards.map((card) => {
                        return (
                          <Grid item style={{ textAlign: "center" }}>
                            <Link
                              to={{
                                pathname: "/dayItinerary",
                                state: { ...card, cityLat, cityLong, cityName },
                              }}
                              style={{ textDecoration: "none" }}
                            >
                              <CardCont
                                image={card.itinerary_image}
                                title={`${card.duration} - Day Itinerary`}
                                desc={card.itinerary_summary}
                              />
                            </Link>
                          </Grid>
                        );
                      })}
                  </Grid>
                  <Box pt={4}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={handleOpen}
                    >
                      Add to Plan
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mr: 0,
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "block", lg: "none" },
                      mr: 0,
                    }}
                  >
                    <IconButton aria-label="back" onClick={handleBack}>
                      <ArrowBackOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Slide>
      </Grid>
      <Grid item xs={12}>
        <AddToPlanComp open={open} handleClose={handleClose} data={newPlan} />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Itinerary;
