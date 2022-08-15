/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Filter Destinations
 */
import React from "react";
import FilterComp from "../../components/Filter";

/**
 * 
 * @param {*} props 
 * @returns Filter component for web screen.
 */
const Filter = (props) => {
  return (
    <FilterComp
      filterProperty={props}
      handleChange={props.handleChange}
      handleClearAll={props.handleClearAll}
    />
  );
};

export default Filter;
