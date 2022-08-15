/**
 * Author: Smily Ms
 * Feature: Bucket List
 * Task: Display Bucket List Page
 */
import { Grid, Typography, Card, CardMedia } from "@mui/material";
import React from "react";
import NavBar from "../containers/NavBar";
import { Box } from "@material-ui/core";
import { useState, useEffect } from "react";
import Footer from "../containers/Footer";
import AlertDialog from "../containers/AlertDialog";
import { AuthContext } from "../context/AuthContext";
import SideBar from "../components/SideBar/Sidebar";
import { Button, CardActionArea, CardActions, Divider } from "@mui/material";
import { BACKEND_URL } from "../config";
import axios from "axios";
import NoDataFound from "../components/NoDataFound";

/**
 * This Page is responsible for showing bucket lists which user can add for their profile.
 * @param {*} props 
 * @returns 
 */

const BucketList = () => {
  const auth = React.useContext(AuthContext);
  const userID = auth.userId;
  const [bucketList, setBucketList] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const [open, setOpen] = useState(false); // for alert box

  useEffect(() => {
    const fetchBucketListURL = `${BACKEND_URL}/bl/fetchBucketListDataByUserId`;
    axios
      .post(fetchBucketListURL, {
        email_id: userID,
      })
      .then((buckList) => {
        setBucketList(buckList.data.bucketListItems);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOpen = (card) => {
    setSelectedItem(card);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    axios
      .post(`${BACKEND_URL}/bl/removeDataFromBucketList`, {
        email_id: selectedItem.email_id,
        dest_name: selectedItem.dest_name,
      })
      .then((res) => {
        window.location.reload();
      });
  };

  const displayStrip = (title, cards) => {
    const data = cards;
    return (
      <>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h4"
                component="h4"
                color="primary"
                paddingTop="0.5em"
                className="text-align-center"
              >
                Your Bucket List
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Box pb={4}>
            <Divider />
          </Box>
        </Grid>

        <Grid item xs={12}>
          {bucketList && bucketList.length > 0 ? (
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              {data &&
                data.map((card) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      style={{ textAlign: "center" }}
                    >
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt={title}
                            height="300"
                            image={card.img}
                            title={title}
                          />
                          <Typography
                            gutterBottom
                            variant="h6"
                            sx={{
                              position: "absolute",
                              top: "80%",
                              left: "10%",
                              color: "white",
                              backgroundColor: "none",
                              fontFamily: "Comic Sans MS",
                              textAlign: "center",
                            }}
                          >
                            {card.dest_name}
                          </Typography>
                        </CardActionArea>
                        <CardActions sx={{ display: "inline-block" }}>
                          <Button
                            size="small"
                            color="primary"
                            className="text-align-center"
                            onClick={(e) => handleOpen(card)}
                          >
                            Remove from bucket list
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          ) : (
            <NoDataFound
              message="Bucket list is empty."
              display={true}
              listEmpty={true}
              className="text-align-center"
            />
          )}
        </Grid>
      </>
    );
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12} lg={3}>
        <SideBar />
      </Grid>
      <Grid item xs={12} lg={9}>
        <Box sx={{ padding: "1em 3em" }}>
          {displayStrip("Your Bucket List", bucketList)}
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
      <Grid item xs={12}>
        <AlertDialog
          open={open}
          title="Confirm"
          message="Are you sure you want to remove it from the bucket list ?"
          handleClose={handleClose}
          handleOk={handleOk}
          buttons={["Cancel", "Ok"]}
        />
      </Grid>
    </Grid>
  );
};

export default BucketList;
