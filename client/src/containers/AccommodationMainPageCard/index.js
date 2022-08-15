/**
 * Feature: Accommodation
 * Task: Filter/pagination/sort
 * Author: Sangramsinh More
 */
import React from "react";
import { accommodationMainPageData } from "./accommodationMainPageData";
import { Box, Stack } from "@mui/material";
import VerticalDisplayCardComp from "../../components/AccommodationVerticalDisplayCard";
import { Divider } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

/**
 * Accommodation Page that calls the
 * @returns
 */
function AccommodationMainPageCard() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box
        component="span"
        sx={{ fontSize: 24, fontFamily: "Arial", fontWeight: "bold" }}
      >
        Start planning your next getaway
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ pt: 2, pb: 1 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {accommodationMainPageData.slice(0, 3).map((myVariable) => {
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

export default AccommodationMainPageCard;
