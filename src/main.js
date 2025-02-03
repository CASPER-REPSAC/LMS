import React, { useState, useEffect } from "react";
import "./App.css";
import AI from "./image/AI_start.jpg";
import CV from "./image/open_CV.jpg";
import REV from "./image/reversing_leaf.jpg";
import CP from "./image/Cprograming.jpg";
import LG from "./image/logical_computer.jpg";

const images = [AI, CV, REV, CP, LG];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100%",
          height: "400px",
        }}
      >
        {images.map((src, idx) => {
          const distance = (idx - currentIndex + images.length) % images.length;
          let translateX, scale, opacity, zIndex;

          if (distance === 0) {
            // Center Image
            translateX = 0;
            scale = 1;
            opacity = 1;
            zIndex = 3;
          } else if (distance === 1 || distance === images.length - 1) {
            // Left and Right Preview Images
            translateX = distance === 1 ? 150 : -150;
            scale = 0.8;
            opacity = 0.8;
            zIndex = 2;
          } else {
            // Hidden Images
            translateX = 0;
            scale = 0.6;
            opacity = 0;
            zIndex = 1;
          }

          return (
            <div
              key={idx}
              className="carousel-item"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                position: "absolute",
                transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                zIndex: zIndex,
                opacity: opacity,
                width: "220px",
                height: "330px",
              }}
            >
              <img src={src} alt={`Slide ${idx + 1}`} />
            </div>
          );
        })}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        뒤로
      </button>
      <button className="next-button" onClick={nextSlide}>
        앞으로
      </button>
    </div>
  );
};

export default Carousel;
