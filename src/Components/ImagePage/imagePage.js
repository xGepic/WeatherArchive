import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./imageStyle.css";

const ImagePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBackButton = () => {
    navigate("/");
  };

  function RenderPage() {
    return (
      <div>
        <div id="titeldiv">
          <h1 id="seachInput">{location.state}</h1>
        </div>
        <div>
          <button id="GoBackButton" onClick={goBackButton}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
  return RenderPage();
};

export default ImagePage;
