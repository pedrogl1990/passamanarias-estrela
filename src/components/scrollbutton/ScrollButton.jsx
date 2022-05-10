import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./ScrollButton.css";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const buttonVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", buttonVisible);
  return (
    <FaArrowCircleUp
      className="scroll"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    />
  );
}
