/**
 * Author: Nishit Mistry
 * Feature: Itinerary Management
 */
import React from "react";
import CardComp from "../../components/Card";

/**
 * Container that passes the props returned from the itinerary pages to display cards
 * @param {*} props
 * @returns
 */
function CardCont(props) {
  return (
    <>
      <CardComp image={props.image} title={props.title} desc={props.desc} />
    </>
  );
}

export default CardCont;
