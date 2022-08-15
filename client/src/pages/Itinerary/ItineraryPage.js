/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Search Itinerary and Itinerary Recommendation
 */
import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../../containers/NavBar";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import CardCont from "../../containers/CardCont";
import { Link } from "react-router-dom";
import Footer from "../../containers/Footer";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import NoDataFound from "../../components/NoDataFound";

/**
 * Renders the itinerary page that displays the recommended itineraries fetched from MongoDB and
 * the user can also search a specific set of cities through the search bar
 * @returns
 */
const ItineraryPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/it/fetchRecommendedItineraries`;
    axios
      .post(fetchURL)
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event, type) => {
    const cityReq = {
      itinerary_city: event.target.value,
    };
    if (event.key === "Enter") {
      const fetchURL = `${BACKEND_URL}/it/searchByCity`;
      axios
        .post(fetchURL, cityReq)
        .then((res) => {
          setCards(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "auto",
            height: 150,
            backgroundColor: "white",
            marginLeft: "2rem",
            marginRight: "2rem",
            mt: 2,
          }}
        >
          <Typography
            variant="h5"
            paddingTop={2}
            paddingLeft={3}
            paddingBottom={2}
            align="center"
          >
            Travel Itineraries
          </Typography>
          <Box pl={3} pr={3}>
            <TextField
              id="search-with-input"
              label="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              type="search"
              fullWidth
              onKeyUp={(event) => {
                handleChange(event);
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "left" }}>
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="h5" paddingLeft={4}>
              Recommended Itineraries for Popular Destinations
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider
          variant="middle"
          sx={{ borderBottomWidth: 3, background: "black", mb: 3 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center" spacing="2">
          {cards.length === 0 && (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              style={{ textAlign: "center" }}
            >
              <NoDataFound
                message="Search Results are Empty"
                display={true}
                listEmpty={true}
                className="text-align-center"
              />
            </Grid>
          )}
          {cards.length !== 0 &&
            cards.map((card) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  style={{ textAlign: "center" }}
                >
                  <Link
                    to={{
                      pathname: "/cityItinerary",
                      state: card,
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <CardCont
                      image={card.itinerary_image}
                      title={card.itinerary_city}
                      desc={card.itinerary_summary}
                    />
                  </Link>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ItineraryPage;
