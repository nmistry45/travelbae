/**
 * Author: Sangramsinh More
 * Feature: Activities to do
 * Task: Activity Page
 */
import { Divider, Grid } from "@mui/material";
import React from "react";
import CardCarousel from "../containers/CardCarousel";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import ActivitySearchBoxComp from "../components/ActivitySearch";
import Footer from "../containers/Footer";
import ActivitiesMainPageCard from "../containers/ActivitiesMainPageCard";


/**
 * This Page is responsible for showing activities main page info.
 * @param {*} props 
 * @returns 
 */
function ActivitiesToDoMainPage() {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <CardCarousel />
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <ActivitySearchBoxComp />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <ActivitiesMainPageCard />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ActivitiesToDoMainPage;
