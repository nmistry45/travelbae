/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Filter Destinations
 */
import React from "react";
import FilterMenuComp from "../../components/FilterMenu";

/**
 *
 * @param {*} props
 * @returns component of filter menu displayed for mobile screens.
 */
const FilterMenu = (props) => {
  return <FilterMenuComp filterProperty={props} />;
};

export default FilterMenu;
