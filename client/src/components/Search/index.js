/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Search for destination.
 */

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";

/**
 *
 * The search component function which invokes an event on click of the search button.
 */
const SearchComp = ({ onEvent }) => {
  const [searchInput, setSearchInput] = useState("");
  let handleEvent = () => {
    onEvent(searchInput);
  };

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0px 20px",
      }}
    >
      <form className="text-align-center">
        <Grid
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <TextField
            id="search-bar"
            className="text"
            variant="outlined"
            color="secondary"
            label="Search by City Name "
            size="small"
            onChange={(event) => setSearchInput(event.target.value)}
            value={searchInput}
            sx={{
              width: "400px",
              marginRight: "20px",
              marginBottom: "10px",
            }}
          />
          <Button
            aria-label="search"
            onClick={handleEvent}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </Grid>
        <Grid>
          <TextField
            id="search-bar"
            className="text"
            variant="outlined"
            color="primary"
            placeholder="Search by city name"
            size="small"
            onChange={(event) => setSearchInput(event.target.value)}
            sx={{
              width: "90%",
              marginRight: "20px",
              borderRadius: "30px",
              display: { xs: "flex", sm: "none" },
              margin: "auto",
            }}
            value={searchInput}
          />
          <Button
            aria-label="search"
            onClick={handleEvent}
            variant="contained"
            color="primary"
            sx={{
              display: { xs: "flex", sm: "none" },
              width: "90%",
              marginTop: "10px",
              margin: "10px auto",
            }}
          >
            Search
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default SearchComp;
