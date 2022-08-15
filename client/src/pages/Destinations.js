/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Display Destination Information
 */
import { Grid, Typography, Pagination, Stack } from "@mui/material";
import "./../components/DestinationCard/Destination.css";
import Filter from "../containers/Filter";
import FilterMenu from "../containers/FilterMenu";
import data from "../containers/DestinationCard/destinationsFilterData";
import NavBar from "../containers/NavBar";
import DestinationCardCont from "../containers/DestinationCard";
import SearchCont from "../containers/Search";
import React, { useState, useEffect } from "react";
import NoDataFound from "../components/NoDataFound";
import Footer from "../containers/Footer";
import usePagination from "../containers/UsePagination";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BACKEND_URL } from "../config";

/**
 * This function brings in different components of Destination Information System in one page.
 */

const Destinations = () => {
  const auth = React.useContext(AuthContext);
  const userID = auth && auth.userId;
  const params = useParams();

  const [destinationsData, setDestinationsData] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [getBucketList, setBucketList] = useState("");

  useEffect(() => {
    if (!params.code) {
      const fetchDestinationsURL = `${BACKEND_URL}/destination/fetchAllDestinations`;
      const fetchBucketListURL = `${BACKEND_URL}/bl/fetchBucketListDataByUserId`;

      axios
        .get(fetchDestinationsURL)
        .then((destinations) => {
          axios
            .post(fetchBucketListURL, {
              email_id: userID,
            })
            .then((buckList) => {
              setBucketList(buckList.data);
              const bucketList = buckList.data.bucketListItems;
              if (bucketList.length > 0) {
                bucketList.forEach((buckList) => {
                  let index = destinations.data.destinations.findIndex(
                    (item) => {
                      return item.dest_code === buckList.dest_code;
                    }
                  );
                  destinations.data.destinations[index].isFavorite = true;
                });
              }
              setDestinationsData(destinations.data.destinations);
            });
        })
        .catch((err) => console.log(err));
    } else {
      const fetchSearchedDestination = `${BACKEND_URL}/destination/fetchFilteredDestinations`;
      const fetchBucketListURL = `${BACKEND_URL}/bl/fetchBucketListDataByUserId`;

      axios
        .post(fetchSearchedDestination, {
          tags: filtering,
          dest_name: params.code,
        })
        .then((destinations) => {
          axios
            .post(fetchBucketListURL, {
              email_id: userID,
            })
            .then((buckList) => {
              setBucketList(buckList.data);
              const bucketList = buckList.data.bucketListItems;
              if (bucketList.length > 0) {
                bucketList.forEach((buckList) => {
                  let index = destinations.data.destinations.findIndex(
                    (item) => {
                      return item.dest_code === buckList.dest_code;
                    }
                  );
                  destinations.data.destinations[index].isFavorite = true;
                });
              }
              setDestinationsData(destinations.data.destinations);
            });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(destinationsData.length / PER_PAGE);

  const handlePaginationChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const _DATA = usePagination(destinationsData, PER_PAGE);

  let handleEvent = (event) => {
    setSearchInput(event);
    axios
      .post(`${BACKEND_URL}/destination/fetchFilteredDestinations`, {
        tags: filtering,
        dest_name: event,
      })
      .then((res) => {
        setPage(1);
          let filterBucketList = getBucketList.bucketListItems;
          if (filterBucketList.length > 0) {
            filterBucketList.forEach((buckList) => {
              let index = res.data.destinations.findIndex(
                (item) => {
                  return item.dest_code === buckList.dest_code;
                }
              );
              if(index >= 0){
                res.data.destinations[index].isFavorite = true;
              }
            });
          }
          setDestinationsData(res.data.destinations);
        });
  };

  const [filtering, setFiltering] = useState({});

  const handleFilterChange = (checkedItems) => {
    setFiltering({
      tags: checkedItems,
    });
    axios
      .post(`${BACKEND_URL}/destination/fetchFilteredDestinations`, {
        tags: {
          tags: checkedItems,
        },
        dest_name: searchInput,
      })
      .then((res) => {
        let filterBucketList = getBucketList.bucketListItems;
          if (filterBucketList.length > 0) {
            filterBucketList.forEach((buckList) => {
              let index = res.data.destinations.findIndex(
                (item) => {
                  return item.dest_code === buckList.dest_code;
                }
              );
              if(index >= 0){
                res.data.destinations[index].isFavorite = true;
              }
            });
          }
          setDestinationsData(res.data.destinations);
        setPage(1);
        _DATA.jump(1);
      });
  };

  const handleFilterClearAll = () => {
    setFiltering({
      tags: {},
    });
    axios
      .post(`${BACKEND_URL}/destination/fetchFilteredDestinations`, {
        tags: {
          tags: [],
        },
        dest_name: searchInput,
      })
      .then((res) => {
        let filterBucketList = getBucketList.bucketListItems;
          if (filterBucketList.length > 0) {
            filterBucketList.forEach((buckList) => {
              let index = res.data.destinations.findIndex(
                (item) => {
                  return item.dest_code === buckList.dest_code;
                }
              );
              if(index >= 0){
                res.data.destinations[index].isFavorite = true;
              }
            });
          }
          setDestinationsData(res.data.destinations);
        setPage(1);
        _DATA.jump(1);
      });
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar></NavBar>
      </Grid>
      <Grid item sx={{ display: { xs: "none", md: "block" } }} md={2} xs={0}>
        <Filter
          filterProperties={data}
          handleChange={handleFilterChange}
          handleClearAll={handleFilterClearAll}
        ></Filter>
      </Grid>
      <Grid item xs={12} md={9}>
        <Typography
          gutterBottom
          variant="h4"
          component="h4"
          color="primary"
          paddingTop="0.5em"
          className="text-align-center"
        >
          Destinations
        </Typography>
        <SearchCont onEvent={handleEvent}></SearchCont>
        <Grid
          item
          sx={{ display: { xs: "block", md: "none" } }}
          md={0}
          xs={12}
          className="text-align-center"
        >
          <FilterMenu filterProperties={data}></FilterMenu>
        </Grid>
        <Grid container>
          {_DATA.currentData() ? (_DATA.currentData().length > 0 ? (
            _DATA.currentData().map((destination) => {
              return (
                <Grid container key={destination.dest_code}>
                  <DestinationCardCont
                    details={destination}
                  ></DestinationCardCont>
                </Grid>
              );
            })
          ) : (
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 2 }}
              className="text-align-center"
            >
              <NoDataFound
                message="Destination not present. Please search for another one or select from the list."
                className="text-align-center"
              ></NoDataFound>
            </Grid>
          )) : (<></>)}
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid container justifyContent="center" sx={{ mt: 3, mb: 2 }}>
              <Stack spacing={2}>
                <Pagination
                  count={count}
                  color="primary"
                  page={page}
                  variant="outlined"
                  shape="rounded"
                  onChange={handlePaginationChange}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Destinations;
