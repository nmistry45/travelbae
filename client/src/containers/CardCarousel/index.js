/**
 * Feature: Generic
 * Author : Trushita Maurya
 */
import React from "react";
import CardCarouselComp from "../../components/CardCarousel";

/**
 * Description: Display homepage card carousel to display different destinations
 * @param {*} props
 * @returns
 */
const CardCarousel = (props) => {
  return <CardCarouselComp {...props} />;
};

export default CardCarousel;
