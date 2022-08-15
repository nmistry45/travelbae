/**
 * Author: Sangramsinh More
 * Feature: Accommodation
 * Task: Accommoadation Main Page
 */
import { Divider, Grid } from "@mui/material";
import React from "react";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import AccommodationSearchBoxComp from "../components/AccommodationSearch";
import Footer from "../containers/Footer";
import AccommodationMainPageCard from "../containers/AccommodationMainPageCard";

/**
 * This Page is responsible for Displaying Accommodation info.
 * @param {*} props 
 * @returns 
 */
const AccommodationPage = () => {
  return (
    <Grid container spacing={0.5}>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Box
          component="img"
          sx={{
            height: 600,
            width: "100%",
            borderRadius: 2,
            p: 4,
          }}
          title="main image accommodation"
          alt="The house from the offer."
          src="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <AccommodationSearchBoxComp />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <AccommodationMainPageCard />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AccommodationPage;
