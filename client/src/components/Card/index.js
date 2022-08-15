/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 */
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core";

/**
 * Renders a card for the itinerary pages with image, title and description that are clickable
 * and lead to a new page
 * @param {*} props
 * @returns
 */
const CardComp = (props) => {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Card sx={{ maxWidth: 250, mb: "10%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CardComp;
