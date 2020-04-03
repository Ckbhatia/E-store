import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselShow({ bannerData }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-main-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bannerData &&
          bannerData.map((banner) => {
            return (
              <Carousel.Item key={banner.id}>
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
