import React from "react";
import { useLocation } from "react-router-dom";
import "./imageStyle.css";

const ImagePage = (props) => {
  const location = useLocation();
  return <h1>{location.state.name}</h1>;
};

export default ImagePage;
