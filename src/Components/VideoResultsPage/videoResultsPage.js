import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./videoResultsStyle.css";

const VideoResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBackButton = () => {
    navigate("/");
  };

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
};

export default VideoResultsPage;
