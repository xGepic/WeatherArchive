import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/landingPage";
import VideoPage from "./Components/VideoPage/videoPage";
import ImagePage from "./Components/ImagePage/imagePage";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/image" element={<ImagePage />} />
      </Routes>
    </Router>
  );
}

export default Routing;
