import React, { useState } from "react";
import "./MainCarousel.css";
import { MainCarouselData } from "./MainCarouselData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MainCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = (e) => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    e.preventDefault(e);
  };

  const prevSlide = (e) => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    e.preventDefault(e);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider-wrapper">
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
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
