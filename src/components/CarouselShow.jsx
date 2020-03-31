import React, { useState } from "react";
import { bannerData } from "../data/banner";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselShow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-main-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bannerData.map((banner) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner.img}
                alt={banner.title}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
