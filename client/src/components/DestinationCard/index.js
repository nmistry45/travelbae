/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Display the list of destinations.
 */
import * as React from "react";
import Paper from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useHistory } from "react-router-dom";
import AlertDialog from "../../containers/AlertDialog";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import axios, { Axios } from "axios";
import { BACKEND_URL } from "../../config";

/**
 *
 * @param {*} details
 * @returns a single card component with a favorite icon depending on the user login status.
 */
const DestinationCardComp = ({ details }) => {
  const auth = React.useContext(AuthContext);
  const userId = auth.userId;
  const history = useHistory();
  const handleListItemClick = () => {
    history.push("/destination/" + details.details.dest_name);
  };
  const [openAdd, setOpenAdd] = useState(false); // for alert box
  const [openRemove, setOpenRemove] = useState(false); // for alert box


  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleOpenRemove = () => {
    setOpenRemove(true);
  };
  const handleCloseRemove = () => {
    setOpenRemove(false);
  };

  const handleOkAdd = () => {
    axios.post(`${BACKEND_URL}/bl/addDataToBucketList`, {
      email_id: userId,
      dest_name: details.details.dest_name,
      dest_code: details.details.dest_code,
      img: details.details.img
    }).then((res) => {
      window.location.reload();
    });
  }

  const handleOkRemove = () => {
    axios.post(`${BACKEND_URL}/bl/removeDataFromBucketList`, {
      email_id: userId,
      dest_name: details.details.dest_name
    }).then((res) => {
      window.location.reload();
    });
  }

  return (
    <Paper
      elevation={6}
      sx={{ height: "150px", width: "90%", margin: "20px", cursor: "pointer" }}
    >
      {userId ? (
        <Grid container spacing={5}>
          <Grid
            item
            xs={4}
            md={3}
            onClick={() => {
              handleListItemClick();
            }}
          >
            <Box
              sx={{
                height: "110px",
                width: "100%",
                margin: "20px",
              }}
            >
              <img
                className="destination-image"
                src={details.details.img}
                alt="details"
              ></img>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={7}
            onClick={() => {
              handleListItemClick();
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ padding: "20px 0px 2px" }}
            >
              {details.details.dest_name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ margin: "0px 10px 20px" }}
              className="card-overflow-ellipsis"
            >
              {details.details.dest_desc}
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ paddingLeft: "20px" }}>
            {details.details.isFavorite ? (
              <FavoriteIcon
                size="large"
                aria-label="add to bucket list"
                aria-controls="bucketlist-icon"
                aria-haspopup="false"
                color="primary"
                sx={{ margin: "0px", height: "100%" }}
                onClick={handleOpenRemove}
              />
            ) : (
              <FavoriteBorderIcon
                size="large"
                aria-label="add to bucket list"
                aria-controls="bucketlist-icon"
                aria-haspopup="false"
                color="primary"
                sx={{ margin: "0px", height: "100%" }}
                onClick={handleOpenAdd}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <AlertDialog
              open={openAdd}
              title="Confirm"
              message="Are you sure you want to add it to the bucket list ?"
              handleClose={handleCloseAdd}
              handleOk={handleOkAdd}
              buttons={["Cancel", "Ok"]}
            />
            <AlertDialog
              open={openRemove}
              title="Confirm"
              message="Are you sure you want to remove it from the bucket list ?"
              handleOk={handleOkRemove}
              handleClose={handleCloseRemove}
              buttons={["Cancel", "Ok"]}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={5}>
          <Grid
            item
            xs={4}
            md={3}
            onClick={() => {
              handleListItemClick();
            }}
          >
            <Box
              sx={{
                height: "110px",
                width: "100%",
                margin: "20px",
              }}
            >
              <img
                className="destination-image"
                src={details.details.img}
                alt="details"
              ></img>
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            md={9}
            onClick={() => {
              handleListItemClick();
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ padding: "20px 0px 2px" }}
            >
              {details.details.dest_name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ paddingRight: "20px" }}
              className="card-overflow-ellipsis"
            >
              {details.details.dest_desc}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};
export default DestinationCardComp;
