/**
 * Feature: Activities To Do
 * Task: Filter/Sort/Search
 * Author: Sangramsinh More
 */
import React from "react";
import { activitiesMainPageData } from "./activitiesMainPageData";
import { Box, Stack } from "@mui/material";
import VerticalDisplayCardComp from "../../components/AccommodationVerticalDisplayCard";
import { Divider } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

/**
 * Descripiton: This takes care of the business logic to display activity card main data
 * @returns
 */
function ActivitiesMainPageCard() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box
        component="span"
        sx={{ fontSize: 24, fontFamily: "Arial", fontWeight: "bold" }}
      >
        Things to Do
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ pt: 2, pb: 1 }}
      >
        {activitiesMainPageData.slice(0, 3).map((myVariable) => {
          return (
            <VerticalDisplayCardComp
              name={myVariable.name}
              image={myVariable.image}
            />
          );
        })}
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ pt: 2, pb: 1 }}
        // divider={<Divider orientation="vertical" flexItem />}
      >
        {activitiesMainPageData.slice(3, 6).map((myVariable) => {
          return (
            <VerticalDisplayCardComp
              name={myVariable.name}
              image={myVariable.image}
            />
          );
        })}
      </Stack>
      <Divider />
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ flexDirection: "column", pt: 2, pl: 5, pr: 5 }}
      >
        <Typography variant="body2">
          <Chip label="What we offer" color="primary" />
        </Typography>

        <Typography variant="body2" sx={{ pt: 2 }}></Typography>
      </Grid>
    </Box>
  );
}

export default ActivitiesMainPageCard;
