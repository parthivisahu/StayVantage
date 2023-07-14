import React, { useState, useEffect } from "react";
import "./carousel.css";
import Room1 from "../../imgs/scene1.jpg";
import Room2 from "../../imgs/scene2.jpg";
import Room3 from "../../imgs/scene3.jpg";

const Carousel = () => {
  const images = [Room1, Room2, Room3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, );

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hotel ${index + 1}`}
          className={index === currentImageIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default Carousel;
