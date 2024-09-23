import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import liminalfield from "../assets/images/liminalfield.webp";
import liminalflower from "../assets/images/liminalflower.webp";
import liminalhallwayA from "../assets/images/liminalhallwayA.webp";
import liminalhallwayB from "../assets/images/liminalhallwayB.webp";
import liminalhallwayC from "../assets/images/liminalhallwayC.webp";
import liminalpool from "../assets/images/liminalpool.webp";
import liminalroof from "../assets/images/liminalroof.webp";
import liminalsign from "../assets/images/liminalsign.webp";
import liminalsound from "../assets/images/liminalsound.webp";
import liminaltunnel from "../assets/images/liminaltunnel.webp";

const images = [
  { src: liminalflower, name: "Коридор з квітами" },
  { src: liminalfield, name: "Двері у полі" },
  { src: liminalhallwayA, name: "Коридор A" },
  { src: liminalhallwayC, name: "Коридор B" },
  { src: liminalhallwayB, name: "Коридор C" },
  { src: liminalpool, name: "Кімната для басейну" },
  { src: liminalroof, name: "Гра освітлення" },
  { src: liminalsound, name: "Глибина простору" },
  { src: liminaltunnel, name: "Модульність" },
  { src: liminalsign, name: "Вибір" },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img.src} alt={img.name} />
          </div>
        ))}
      </Slider>
      <p className="image-name">{images[currentSlide].name}</p>
    </div>
  );
};

export default Carousel;
