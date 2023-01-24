import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./imageStyle.css";

const ImagePage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const goBackButton = () => {
    navigate("/");
  };

  useEffect(() => {
    const config = {
      headers: {},
    };
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://937sshyksk.execute-api.us-east-1.amazonaws.com/Deploy/getimage?begin=2023-01-02%2019:00:00&end=2023-01-02%2020:00:00&loc=" +
            location.state +
            "&Key=kHM0GgXPkb89BYpAkAwu69TX3wyhnQlK8EPww5Bp",
          config
        );
        setImageUrl(
          `data:image/jpeg;base64,${response.data[Object.keys(response.data)]}`
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  });

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
        <div>
          <img src={imageUrl} alt="Lambda Img" />
          <h1>Metadata:</h1>
        </div>
      </div>
    );
  }
  return RenderPage();
};

export default ImagePage;
