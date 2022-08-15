/**
 * Author: Smily Ms
 * Feature: Destination Information System
 * Task: Display the list of destinations.
 */
import React from "react";
import DestinationCard from "../../components/DestinationCard";

/**
 * Description: A destination card with image, description, and title passed in the props.
 * @param {*} props
 * @returns
 */
function DestinationCardCont(props) {
  return <DestinationCard details={props} />;
}

export default DestinationCardCont;
