import React, { useState, useEffect } from "react";
import "./App.css";
import AI from "./image/AI_start.jpg";
import CV from "./image/open_CV.jpg";
import REV from "./image/reversing_leaf.jpg";
import CP from "./image/Cprograming.jpg";
import LG from "./image/logical_computer.jpg";
import EASTER from "./image/easteregg.jpeg";
import REV1 from "./image/reversing_introduction.jpg";

const images = [AI, CV, REV, CP, LG, EASTER, REV1];
const images_name = [
  "누구나 쉽게 배우는 인공지능 스타트",
  "Open-CV로 배우는 영상 처리 및 응용",
  "리버싱 핵심원리",
  "열혈 C 프로그래밍",
  "디지털논리와 컴퓨터설계",
  "삼돌이",
  "리버싱 입문"
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // 중앙에 위치할 초기 인덱스 설정

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
            // 가운데 이미지
            translateX = 0;
            scale = 1;
            opacity = 1;
            zIndex = 3;
          } else if (distance === 1 || distance === images.length - 1) {
            // 양쪽 첫번째 이미지
            translateX = distance === 1 ? 150 : -150;
            scale = 0.8;
            opacity = 0.9;
            zIndex = 2;
          } else if (distance === 2 || distance === images.length - 2) {
            translateX = distance === 2 ? 300 : -300;
            scale = 0.6;
            opacity = 0.6;
            zIndex = 1;
          } else {
            // 숨겨진 이미지
            translateX = 0;
            scale = 0.4;
            opacity = 0;
            zIndex = 0;
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
                textAlign: "center",
              }}
            >
              <img src={src} alt={images_name[idx]} />
            </div>
          );
        })}
      </div>

      {/* ✅ 가운데 이미지의 이름을 고정된 위치에 표시 */}
      <div className="carousel-caption">
        <p>{images_name[currentIndex]}</p>
      </div>

      <button className="prev-button" onClick={prevSlide}>
        ◀
      </button>
      <button className="next-button" onClick={nextSlide}>
        ▶
      </button>
    </div>
  );
};

export default Carousel;
