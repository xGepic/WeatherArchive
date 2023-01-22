import React from "react";
import { useNavigate } from "react-router-dom";
import "./videoStyles.css";

const VideoPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  function RenderPage() {
    return (
      <div>
        <div id="videoTitleDiv">
          <h1 id="videoTitle">Video Page</h1>
        </div>
        <div>
          <button id="GoBackButton" onClick={handleClick}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
  return RenderPage();
};

export default VideoPage;
