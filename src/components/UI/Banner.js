import React, { useState } from "react";
import { Carousel, Row, Col } from "antd";
import Image from "next/image";

import imageOne from "@/assets/images/banner-images/1.png";
import imageTwo from "@/assets/images/banner-images/2.webp";
import imageThree from "@/assets/images/banner-images/3.jpg";

const Banner = () => {
  const slides = [
    {
      image: imageOne,
      title: "Build Your Dream PC",
      description:
        "Explore a wide range of PC components to build your dream PC.",
    },
    {
      image: imageTwo,
      title: "Stay Updated with the Latest Tech",
      description:
        "Discover the latest articles and updates on technology trends.",
    },
    {
      image: imageThree,
      title: "Join Our Tech Enthusiast Community",
      description:
        "Connect with like-minded individuals and share your passion for tech.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCarouselChange = (current) => {
    setCurrentSlide(current);
  };

  const carouselSettings = {
    autoplay: true,
    dots: false,
    beforeChange: handleCarouselChange,
  };

  return (
    <div>
      <Carousel {...carouselSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Row gutter={[16, 32]} justify="center" align="middle">
              <Col xs={24} sm={12} md={12} lg={8}>
                {/* Use md={12} for iPad devices to keep the image on the first line */}
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    width={500}
                    height={300}
                  />
                </div>
              </Col>
              <Col xs={24} sm={12} md={12} lg={16}>
                {/* Use md={12} for iPad devices to keep the text on the second line */}
                <div>
                  <h2 style={{ fontSize: "32px", textAlign: "center" }}>
                    {slide.title}
                  </h2>
                  <p style={{ fontSize: "18px", textAlign: "center" }}>
                    {slide.description}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        {slides.map((slide, index) => (
          <span
            key={index}
            onClick={() => handleCarouselChange(index)}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: index === currentSlide ? "#1890ff" : "#c4c4c4",
              margin: "0 4px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .ant-carousel .slick-slide {
          text-align: center;
          background: #f0f0f0;
          overflow: hidden;
          height: auto;
          padding: 24px;
        }

        @media (max-width: 767px) {
          .ant-carousel .slick-slide .ant-row {
            display: block;
          }

          .ant-carousel .slick-slide .ant-col {
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
