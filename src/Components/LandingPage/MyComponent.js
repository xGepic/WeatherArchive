import React, { useState } from "react";
import axios from "axios";

function MyComponent() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleClick = () => {
    axios
      .get(
        "https://random.imagecdn.app/v1/image?width=500&height=150&category=tree&format=image",
        {
          responseType: "arraybuffer",
        }
      )
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        const src = `data:${response.headers["content-type"]};base64,${base64}`;
        setImageSrc(src);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Image</button>
      {imageSrc && (
        <div>
          <img src={imageSrc} alt="Image from API" />
        </div>
      )}
    </div>
  );
}

export default MyComponent;
