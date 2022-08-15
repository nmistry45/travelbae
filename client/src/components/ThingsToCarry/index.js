/**
 * Author: Trushita Maurya
 * Feature: Things to Carry
 */
import { Grid, Typography, Box, CardActions } from "@material-ui/core";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Filter from "../../containers/Filter";
import FilterMenu from "../../containers/FilterMenu";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./styles";
import NoDataFound from "../../components/NoDataFound";

const ThingsToCarryComp = (props) => {
  const classes = useStyles();
  const [checkedItems, setCheckedItems] = useState([]);
  const {
    data,
    imgData,
    filterProperties,
    handleChange,
    handleClearAll,
    handleSearch,
    handleShare,
  } = props;
  const categories = ["Clothes", "Shoes", "Toiletry", "Misc"];

  const handleClick = (name) => {
    const updatedChecklist = [...checkedItems];
    const position = updatedChecklist.findIndex((item) => item === name);
    if (position !== -1) {
      updatedChecklist.splice(position, 1);
    } else {
      updatedChecklist.push(name);
    }
    setCheckedItems(updatedChecklist);
  };

  const displayCards = (carryItem, category) => {
    const image = imgData.find((item) => item.name === carryItem.name)?.image;
    const name = carryItem.name;
    if (carryItem.category === category) {
      return (
        <Grid item xs={6} sm={4} md={2} lg={2} style={{ marginBottom: 20 }}>
          <Card
            className={classes.root}
            key={name}
            onClick={() => handleClick(name)}
          >
            <Box component="div" sx={{ height: "1rem" }}>
              {checkedItems.indexOf(name) !== -1 && (
                <CheckCircleIcon color="success" />
              )}
            </Box>
            {image && (
              <CardActionArea className={classes.actionArea}>
                <CardMedia
                  className={classes.media}
                  component="img"
                  image={image}
                  alt={name}
                />
              </CardActionArea>
            )}
            <CardActions className={classes.cardFooter}>
              <Typography gutterBottom component="div">
                {name}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      );
    } else {
      return null;
    }
  };
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={3}>
        <Box display="flex" sx={{ display: { xs: "none", lg: "block" } }}>
          <Filter
            filterProperties={filterProperties}
            handleChange={handleChange}
            handleClearAll={handleClearAll}
          ></Filter>
        </Box>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Box display="inline-flex">
              <Typography variant="h5">Things To Carry</Typography>
              <Box
                sx={{
                  display: { xs: "flex", lg: "none" },
                }}
              >
                <FilterMenu filterProperties={filterProperties}></FilterMenu>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box pb={2}>
              <Divider
                variant="middle"
                sx={{ borderBottomWidth: 3, background: "black" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                width: "auto",
                height: "auto",
                backgroundColor: "white",
                marginLeft: "2rem",
                marginRight: "2rem",
              }}
            >
              <Box pl={3} pr={3}>
                <TextField
                  id="search-with-input"
                  label="Search"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  type="search"
                  fullWidth
                  onKeyUp={(event) => {
                    handleSearch(event);
                  }}
                />
              </Box>
            </Box>
          </Grid>
          {data.length === 0 ? (
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
          ) : (
            categories.map((dataObj) => {
              return (
                <>
                  <Grid item xs={12}>
                    <Typography variant="h5" textAlign="center">
                      {dataObj}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  {data &&
                    data.map((item) => <>{displayCards(item, dataObj)}</>)}
                </>
              );
            })
          )}

          <Grid item xs={12}>
            <Box justifyContent="flex-end" display="flex">
              <Box
                display="inline-flex"
                justifyContent="flex-end"
                paddingLeft={2}
                paddingRight={2}
              >
                {/* <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={() => handleShare(checkedItems)}
                >
                  Share Checklist
                </Button> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ThingsToCarryComp;
