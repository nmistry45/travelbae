// import React from "react";
// import { Grid, Box, Typography, Stack, Divider } from "@mui/material";

// function ActivitiesCardComp(props) {
//   return (
//     <Grid
//       spacing={1}
//       container
//       direction="column"
//       sx={{
//         mt: 2,
//         border: 1,
//         borderRadius: 1,
//         flexDirection: {
//           xs: "column", // mobile
//           sm: "row", // tablet and up
//         },
//       }}
//     >
//       <Grid item xs={3}>
//         <Box
//           component="img"
//           sx={{
//             maxHeight: 200,
//             width: 100,
//             display: "flex",
//             border: 1,
//           }}
//           alt="The house from the offer."
//           src={props.image}
//         />
//       </Grid>
//       <Grid item xs={9}>
//         <Box direction="row">
//           <Typography>{props.name}</Typography>
//           <Divider />
//           <Typography
//             sx={{ display: { xs: "none", sm: "block", md: "block" } }}
//           >
//             {props.description}
//           </Typography>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }

// export default ActivitiesCardComp;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core";
import { Button } from "@mui/material";

const ActivitiesCardComp = (props) => {
  return (
    <Grid container>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="145"
            image={props.image}
            alt={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.title}
            </Typography>
            <Button variant="contained">Add to Plan</Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ActivitiesCardComp;
