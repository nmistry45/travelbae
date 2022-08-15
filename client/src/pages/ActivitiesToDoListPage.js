/**
 * Author: Sangramsinh More
 * Feature: Activities to do
 * Task: Activity List Page
 */
import { Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import ActivitySearchBoxComp from "../components/ActivitySearch";
import Footer from "../containers/Footer";
import { activitiesList } from "../containers/ActivitiesListCard/activitiesData";
import HorizontralCardComp from "../components/HorizontalCard";
import Filter from "../containers/Filter";
import FilterMenu from "../containers/FilterMenu";
import axios from "axios";
import { BACKEND_URL } from "../config/index";
import AccommodationSortDropdown from "../components/AccommodationSortDropdown";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePagination from "../containers/UsePagination";
import NoDataFound from "../components/NoDataFound";

/**
 * This Page is responsible for the api calls with backend and also for the sorting, filtering, pagination and searching tasks for activities.
 * @param {*} props 
 * @returns 
 */

function ActivitiesToDoListPage() {
  const [allHotels, setAllHotels] = useState([]);

  let [keyword, setKeyword] = useState("");
  let [sort, setSort] = useState(0);

  const [filtering, setFiltering] = useState({});

  const handleChange = (checkedItems) => {
    setFiltering({
      tags: checkedItems,
    });
  };

  const handleClearAll = () => {
    setFiltering({
      tags: {},
    });
  };

  // use effect for calling SearchAccommodation Service in Backend. Here, I'm passing hotel name which we are getting from
  // search component and Sort which we are getting from AccommodationSortDropdown Component.
  useEffect(() => {
    axios
      .post(`${BACKEND_URL}/act/searchActivity`, {
        hotel_name: keyword,
        sort_type: sort,
        tags: filtering,
      })
      .then((res) => {
        setAllHotels(res.data.data);
      });
  }, [keyword, filtering, sort ]);

  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const count = Math.ceil(allHotels.length / PER_PAGE);

  const handleChange1 = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const _DATA = usePagination(allHotels, PER_PAGE);

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
          src="https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/6349a86b-0fff-41ec-a230-41fc427ed203/Outdoor-activties-header.jpg"
        />
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={4}>
          <ActivitySearchBoxComp keyword={setKeyword} />
          <Grid
            item
            sx={{ display: { xs: "block", md: "none" } }}
            md={0}
            xs={12}
            className="text-align-center"
          >
            <FilterMenu filterProperties={activitiesList}></FilterMenu>
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box sx={{ mb: 1 }}>
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          {allHotels.length !== 0 && (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              style={{ textAlign: "center" }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: 24,
                  fontFamily: "Arial",
                  fontWeight: "bold",
                }}
              >
                Top Activities to Do...
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ pr: 20 }}>
          <AccommodationSortDropdown sortingType={setSort} />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          {allHotels.length === 0 && (
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
        </Grid>
      </Grid>

      <Grid item>
        <Box sx={{ display: { xs: "none", md: "block" } }} md={2} xs={0}>
          <Filter
            filterProperties={activitiesList}
            handleChange={handleChange}
            handleClearAll={handleClearAll}
          ></Filter>
        </Box>
      </Grid>

      <Grid item xs={10}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {_DATA.currentData().map((myVariable, index) => {
            return (
              <HorizontralCardComp
                key={index}
                name={myVariable.activity_name}
                address={myVariable.activity_address}
                image={myVariable.activity_image}
                desc={myVariable.activity_desc}
                city={myVariable.dest_name}
                price={myVariable.price}
                type="act"
              />
            );
          })}
        </Grid>
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
                onChange={handleChange1}
              />
            </Stack>
          </Grid>
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

export default ActivitiesToDoListPage;
