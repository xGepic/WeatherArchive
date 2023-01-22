import React from "react";
import { useLocation } from "react-router-dom";
import "./imageStyle.css";

const ImagePage = () => {
  const location = useLocation();

  return (
    <div id="titeldiv">
      <h1 id="seachInput">{location.state}</h1>
    </div>
  );
};

export default ImagePage;
