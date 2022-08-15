/**
 * Author: Sangramsinh More
 * Feature: Accommodation/Activitites to do
 * Task: Display Accommodation/Activities
 */
import React from "react";
import { Button, Divider, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LocationOn from "@mui/icons-material/LocationOn";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AddToPlanComp from "../AddToPlan";
import LoginAlertComp from "../LoginAlert";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

/**
 * This component is responsible for displaying the accommoadtion and activity information in a card form, this component is reused for rendering individual accommodations and activities
 * @param {*} props
 * @returns
 */

//Code Reference: https://mui.com/core/
function HorizontralCardComp(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useLocation();

  const auth = useContext(AuthContext);
  const userId = auth.userId ? auth.userId : "";

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => setOpen2(false);

  const [selectTrip, setSelectTrip] = React.useState("");

  const handleChange = (event) => {
    setSelectTrip(event.target.value);
  };

  var sendData;

  if (props.type === "acc") {
    sendData = {
      accommodation: {
        hotel_id: props.id,
        hotel_name: props.name,
        address: props.address,
        city: props.city,
        price: props.price,
        country: props.country,
      },
    };
  }

  if (props.type === "act") {
    sendData = {
      activity: {
        activity_id: props.id,
        activity_name: props.name,
        activity_address: props.address,
        city: props.city,
        price: props.price,
        country: props.country,
      },
    };
  }

  return (
    <Card sx={{ width: 345, maxWidth: 345, ml: 2, mt: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <LocationOn /> {props.address}, {props.city}
        </Typography>
      </CardContent>
      <CardActions sx={{ ml: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ${props.price}
        </Typography>
        <Button onClick={handleOpen} variant="contained" size="small">
          Learn More
        </Button>
        <Button onClick={handleOpen2} variant="contained" size="small">
          Add to Plan
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ mb: 2 }}
            >
              {props.name}:
            </Typography>
            <Divider />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {props.desc}
            </Typography>
          </Box>
        </Modal>
      </CardActions>
      {userId ? (
        <AddToPlanComp
          open={open2}
          handleClose={handleClose2}
          data={sendData}
        />
      ) : (
        <LoginAlertComp open={open2} handleClose={handleClose2} />
      )}
    </Card>
  );
}

export default HorizontralCardComp;
