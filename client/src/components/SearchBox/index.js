import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import AlertDialog from "../../containers/AlertDialog";

// Search box
const SearchBoxComp = ({ onEvent }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigateToDest = () => {
    onEvent(searchInput);
  }

  return (
    <Box marginLeft={4} marginRight={4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item lg={3} md={3} xs={12}>
          <Typography variant="h5" textAlign="center">
            Where do you want to go?
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box justify="center" display="flex" justifyContent="center">
            <TextField
              placeholder="Destination"
              label="Destination"
              size="medium"
              type="search"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              color="secondary"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Grid>

        <Grid
          item
          lg={2}
          md={2}
          xs={12}
          alignContent="center"
          alignItems="center"
        >
          <Button variant="contained" fullWidth onClick={navigateToDest}>
            <Typography p={1}>Search</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBoxComp;
