import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import VideosPage from "./pages/VideosPage";
import CarouselPage from "./pages/CarouselPage";
import Footer from "./components/Footer";
import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/carousel" element={<CarouselPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
