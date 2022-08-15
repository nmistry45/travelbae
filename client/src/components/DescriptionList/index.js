/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 */
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Grid } from "@material-ui/core";

/**
 * Renders a description list that is visible on the Day Itinerary Page
 * @param {*} props
 * @returns
 */
const DescriptionListComp = (props) => {
  return (
    <Grid container>
      <Grid item xs={12} lg={4}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
          alt={props.title}
          src={props.image}
        ></Box>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Typography
          variant="h5"
          paddingTop={1}
          paddingBottom={1}
          paddingLeft={4}
          align="left"
          fontWeight="bold"
        >
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          paddingTop={1}
          paddingBottom={1}
          paddingLeft={4}
          align="left"
        >
          {props.desc}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DescriptionListComp;
