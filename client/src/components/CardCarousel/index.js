import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "./style";
import data from "../../containers/CardCarousel/mockdata";
import Button from "@mui/material/Button";

const CardCarouselComp = (props) => {
  const classes = useStyles();

  /**
   *
   * @param {*} item - display carousel with images only
   * @param {*} index
   * @returns
   */
  const carouselWithImageOnly = (item, index) => {
    return (
      <Card>
        <CardMedia
          component="img"
          height="700"
          image={item.image}
          alt="green iguana"
        />
        {props.content && (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.city}
            </Typography>
          </CardContent>
        )}
      </Card>
    );
  };

  /**
   *
   * @param {*} item
   * @param {*} index
   * @returns
   */
  const carouselWithImageTextOverlay = (item, index) => {
    return (
      <Card>
        <CardMedia
          component="img"
          image={item.image}
          height="500"
          title={item.city}
          alt="city"
        />
        <Box>
          <Typography variant="h2" className={classes.cardImgText}>
            {item.city}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: "5%",
              }}
            >
              <Typography variant="h5" className={classes.cardImgTextColor}>
                Take only memories, leave only footprints
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: "10%",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                href="/trip-planner"
              >
                <Typography className={classes.cardImgTextColor}>
                  Plan your Next Trip
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: "10%",
              }}
            >
              <Button variant="contained" color="secondary" href="/itinerary">
                <Typography className={classes.cardImgTextColor}>
                  Explore Itineraries
                </Typography>
              </Button>
            </Box>
          </Typography>
        </Box>
      </Card>
    );
  };

  return (
    <Carousel index={4}>
      {data.map((item, index) => {
        return props.hasImgText
          ? carouselWithImageTextOverlay(item, index)
          : carouselWithImageOnly(item, index);
      })}
    </Carousel>
  );
};
export default CardCarouselComp;
