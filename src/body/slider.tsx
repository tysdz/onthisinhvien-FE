import React, { useState, useEffect } from "react";
import "./slider.scss";

interface SliderProps {
  slides: string[]; // Assuming slides are URLs to images, adjust the type accordingly
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    setActiveDot(slideIndex);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
    setActiveDot(nextIndex);
  };

  const slideStylesWidthBackground = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/${slides[currentIndex]})`,
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  return (
    <div className="slider">
      <div className="slide" style={slideStylesWidthBackground}></div>
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            className={`dot ${activeDot === slideIndex ? "active-dot" : ""}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
