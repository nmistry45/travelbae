/**
 * Author: Smriti Mishra
 * Feature: Googke Map
 */
import React, { useState } from "react";
import {
  GoogleMap,
  // InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

const MapComponent = (props) => {
  const [popUp, setpopUp] = useState("");

  const initialPinPosition = [
    {
      label: { color: "black", text: "Location" },
      draggable: true,
      position: props.coordinates,
    },
  ];
  const [pin, setPin] = useState(initialPinPosition);

  const pinClick = (marker, index) => {
    setpopUp(index);
    console.log(marker, index);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDrFm6nEA7UkiQLBQ3sCwhIJy-jdqj2NmM">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "15em" }}
        center={props.coordinates}
        zoom={15}
      >
        {pin.map((pin, index) => (
          <Marker
            key={index}
            position={props.coordinates}
            label={props.label}
            draggable={pin.draggable}
            onClick={(event) => pinClick(pin, index)}
          ></Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
