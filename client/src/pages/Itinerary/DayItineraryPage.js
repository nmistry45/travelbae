/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 * Task: Weather Integration
 */
import { Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import NavBar from "../../containers/NavBar";
import DescriptionList from "../../containers/DescriptionList";
import Footer from "../../containers/Footer";
import axios from "axios";
import moment from "moment";
import { BACKEND_URL } from "../../config";
import { Weather_API } from "../../config";
import { useLocation } from "react-router-dom";

/**
 * Renders the day itinerary page that shows the content of a particular itinerary and
 * weather details for a city
 * @returns
 */
const DayItineraryPage = () => {
  const location = useLocation();
  const duration = location.state.duration;
  const cityLat = location.state.cityLat;
  const cityLong = location.state.cityLong;
  const cityName = location.state.cityName;
  const [descList, setDescList] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const days = [];
  for (let i = 1; i <= duration; i++) {
    days.push(i);
  }

  useEffect(() => {
    const fetchURL = `${BACKEND_URL}/dit/fetchDayItinerary`;
    const cityReq = {
      itinerary_city: cityName,
    };
    axios
      .post(fetchURL, cityReq)
      .then((res) => {
        setDescList(res.data);
      })
      .catch((err) => console.log(err));
  }, [cityName]);

  useEffect(() => {
    const weatherURL = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLong}&appid=${Weather_API}`;
    axios
      .get(weatherURL)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => console.log(err));
  }, [cityLat, cityLong]);

  const dates =
    weatherData &&
    weatherData.list &&
    weatherData.list.map((item) => {
      return {
        epochDate: item.dt,
        formattedDate: moment.unix(item.dt).format("MMM DD YYYY"),
      };
    });

  let uniqueDates = [
    ...new Map(
      dates && dates.map((item) => [item["formattedDate"], item])
    ).values(),
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            width: "auto",
            backgroundColor: "white",
            marginTop: "1rem",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        >
          <Typography
            variant="h5"
            paddingTop={1}
            paddingBottom={1}
            paddingLeft={1}
            align="center"
            fontWeight="bold"
          >
            {duration} - Day Itinerary
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={9}>
        {descList.length &&
          days.map((day) => {
            return (
              <>
                <Typography
                  variant="h5"
                  paddingTop={1}
                  paddingBottom={1}
                  paddingLeft={1}
                  align="left"
                >
                  Day {day}
                </Typography>
                <Grid item xs={12}>
                  <Divider
                    variant="middle"
                    sx={{ borderBottomWidth: 3, background: "black" }}
                  />
                </Grid>
                {descList.map((dayItinerary) => {
                  if (dayItinerary.day === day) {
                    return (
                      <DescriptionList
                        image={dayItinerary.itinerary_image}
                        title={dayItinerary.itinerary_place}
                        desc={dayItinerary.itinerary_description}
                      />
                    );
                  } else {
                    return <></>;
                  }
                })}
              </>
            );
          })}
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            width: "auto",
            height: "auto",
            backgroundColor: "white",
            marginTop: "2rem",
          }}
        >
          <Typography variant="h5" align="center">
            Weather Details
          </Typography>
          <Box
            sx={{
              backgroundImage: `url(https://cdn.stocksnap.io/img-thumbs/960w/pastel-clouds_H89THM4Y6L.jpg)`,
              backgroundSize: "cover",
              color: "white",
              height: "20rem",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Grid item xs={12} style={{ textAlign: "center" }}>
              {uniqueDates.map((d) => {
                return (
                  weatherData &&
                  weatherData.list &&
                  weatherData.list.map((item) => {
                    if (d.epochDate === item.dt) {
                      return (
                        <Typography variant="h6">
                          {d.formattedDate}:{" "}
                          {Math.round(item.main.feels_like - 273.15)}°C
                        </Typography>
                      );
                    } else {
                      return <></>;
                    }
                  })
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default DayItineraryPage;
