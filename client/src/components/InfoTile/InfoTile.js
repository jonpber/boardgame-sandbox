import React from "react";
import "./InfoTile.css";

const InfoTile = props =>

  <div className="infotile-frame">
    Title: {props.info.name}
    Description: {props.info.description}
    Location: {props.info.location}
  </div>

export default InfoTile;