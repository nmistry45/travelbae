/**
 * Author: Nishit Mistry
 * Feature: Trip Planner
 * Task: Customized Trip Form
 */
import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import NavBar from "../../containers/NavBar";
import Footer from "../../containers/Footer";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
//https://mui.com/material-ui/material-icons/ ref for icons
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import { useHistory, useLocation } from "react-router-dom";

/**
 * Renders the Travel option page for the customized trip form
 * @returns
 */
const Travel = () => {
  const [checkedItemsSolo, setCheckedItemsSolo] = useState("");
  const [checkedItemsCouple, setCheckedItemsCouple] = useState("");
  const [checkedItemsFamily, setCheckedItemsFamily] = useState("");
  const [checkedItemsFriends, setCheckedItemsFriends] = useState("");
  const [marked, setMarked] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const tripPlannerData = location.state;

  const handleBack = () => {
    history.push({
      pathname: "/trip-planner/plan",
      state: { ...tripPlannerData },
    });
  };

  const handleForward = () => {
    history.push({
      pathname: "/trip-planner/itinerary",
      state: { ...tripPlannerData, travel_partner },
    });
  };

  const handleClickSolo = (name) => {
    if (checkedItemsSolo === name) {
      setCheckedItemsSolo("");
      setMarked(false);
    } else {
      if (!marked) {
        setCheckedItemsSolo(name);
        setMarked(true);
      }
    }
  };

  const handleClickCouple = (name) => {
    if (checkedItemsCouple === name) {
      setCheckedItemsCouple("");
      setMarked(false);
    } else {
      if (!marked) {
        setCheckedItemsCouple(name);
        setMarked(true);
      }
    }
  };

  const handleClickFamily = (name) => {
    if (checkedItemsFamily === name) {
      setCheckedItemsFamily("");
      setMarked(false);
    } else {
      if (!marked) {
        setCheckedItemsFamily(name);
        setMarked(true);
      }
    }
  };

  const handleClickFriends = (name) => {
    if (checkedItemsFriends === name) {
      setCheckedItemsFriends("");
      setMarked(false);
    } else {
      if (!marked) {
        setCheckedItemsFriends(name);
        setMarked(true);
      }
    }
  };

  let travel_partner = "";
  if (checkedItemsSolo) {
    travel_partner = "solo";
  } else if (checkedItemsCouple) {
    travel_partner = "couple";
  } else if (checkedItemsFamily) {
    travel_partner = "family";
  } else if (checkedItemsFriends) {
    travel_partner = "friends";
  }

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Box
            sx={{
              bgcolor: "#e0ffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: "6%",
              pb: "6%",
            }}
          >
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={2} lg={2}>
                <Box
                  display="flex"
                  sx={{ pl: 2, display: { xs: "none", lg: "block" } }}
                >
                  <IconButton aria-label="back" onClick={handleBack}>
                    <ArrowBackOutlinedIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} lg={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 2,
                  }}
                >
                  <Typography textAlign="center" variant="h4">
                    Who are you travelling with?
                  </Typography>
                  <Box display="inline-flex" sx={{ pt: 2, pb: 2 }}>
                    <Typography variant="h5" fontWeight={550}>
                      Start Date:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">
                      {tripPlannerData.start_date} -
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5" fontWeight={550}>
                      End Date:
                    </Typography>
                    <Typography variant="h5">&nbsp;</Typography>
                    <Typography variant="h5">
                      {tripPlannerData.end_date}
                    </Typography>
                  </Box>
                  <Box display="inline-flex">
                    <Card
                      sx={{ width: "35%", mr: "2%" }}
                      onClick={() => handleClickSolo("solo")}
                    >
                      <Box component="div" sx={{ height: "1rem" }}>
                        {checkedItemsSolo !== "" && marked && (
                          <CheckCircleIcon color="success" />
                        )}
                      </Box>
                      <CardActionArea>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Avatar sx={{ m: 1 }}>
                            <PersonIcon />
                          </Avatar>
                        </Box>
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Solo
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card
                      sx={{ width: "35%", mr: "2%" }}
                      onClick={() => handleClickCouple("couple")}
                    >
                      <Box component="div" sx={{ height: "1rem" }}>
                        {checkedItemsCouple !== "" && marked && (
                          <CheckCircleIcon color="success" />
                        )}
                      </Box>
                      <CardActionArea>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Avatar sx={{ m: 1 }}>
                            <FavoriteIcon />
                          </Avatar>
                        </Box>
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Couple
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card
                      sx={{ width: "35%", mr: "2%" }}
                      onClick={() => handleClickFamily("family")}
                    >
                      <Box component="div" sx={{ height: "1rem" }}>
                        {checkedItemsFamily !== "" && marked && (
                          <CheckCircleIcon color="success" />
                        )}
                      </Box>
                      <CardActionArea>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Avatar sx={{ m: 1 }}>
                            <FamilyRestroomIcon />
                          </Avatar>
                        </Box>
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Family
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card
                      sx={{ width: "35%", mr: "2%" }}
                      onClick={() => handleClickFriends("friends")}
                    >
                      <Box component="div" sx={{ height: "1rem" }}>
                        {checkedItemsFriends !== "" && marked && (
                          <CheckCircleIcon color="success" />
                        )}
                      </Box>
                      <CardActionArea>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Avatar sx={{ m: 1 }}>
                            <GroupIcon />
                          </Avatar>
                        </Box>
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              Friends
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "block", lg: "none" },
                    }}
                  >
                    <IconButton aria-label="back" onClick={handleBack}>
                      <ArrowBackOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="next" onClick={handleForward}>
                      <ArrowForwardOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ pr: 2, display: { xs: "none", lg: "flex" } }}
                >
                  <IconButton aria-label="next" onClick={handleForward}>
                    <ArrowForwardOutlinedIcon />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Slide>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Travel;
