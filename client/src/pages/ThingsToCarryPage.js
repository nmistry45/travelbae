/**
 * Author: Trushita Maurya
 * Feature: Things to carry
 * Task: Things to carry Page
 */
import { Grid } from "@material-ui/core";
import React from "react";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import ThingsToCarry from "../containers/ThingsToCarry";

/**
 * This Page is responsible for showing things which you can carry in your trip.
 * @param {*} props 
 * @returns 
 */

const ThingsToCarryPage = () => {
  return (
    <Grid spacing={2} container mt={2}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} sx={{ overflow: "hidden" }}>
        <ThingsToCarry />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ThingsToCarryPage;
