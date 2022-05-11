import React, { useState, useEffect, useCallback } from "react";
import "./MainCarousel.css";
import { MainCarouselData } from "./MainCarouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MainCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = useCallback(() => {
    setCurrent((previousState) =>
      previousState === length - 1 ? 0 : previousState + 1
    );
  }, [length]);

  const prevSlide = () => {
    setCurrent((previousState) =>
      previousState === 0 ? length - 1 : previousState - 1
    );
  };

  useEffect(() => {
    const handleAutoplay = setInterval(nextSlide, 3000);
    return () => clearInterval(handleAutoplay);
  }, [nextSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider-wrapper">
      <section className="slider">
        <button className="left-arrow" onClick={prevSlide}>
          <FaArrowAltCircleLeft />
        </button>
        <button className="right-arrow" onClick={nextSlide}>
          <FaArrowAltCircleRight />
        </button>
        {MainCarouselData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt={slide.alt} className="image" />
              )}
              {index === current && <h2 className="h2">{slide.h2}</h2>}
              {index === current && <p className="p">{slide.p}</p>}
              {index === current && (
                <NavLink to={slide.link}>
                  <button className="button">{slide.button}</button>
                </NavLink>
              )}
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default MainCarousel;
