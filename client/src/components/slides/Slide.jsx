import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Mousewheel, Keyboard,Autoplay } from "swiper";

const Slide = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        autoplay = {{delay:3000}}
        modules={[Navigation,Mousewheel, Keyboard,Autoplay]}
        className="mySwiper"
        style={{ height: "50vh", marginTop: "10px" }}
      >
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img src="images/04122022-UHP-D-TopBanner-P3-Winterwear-TIGDNMX-Min50.webp" />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img src="images/30112022-unisex-m-top-p1-brands-4080.webp" />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "100vw" }}
            src="images/e-commerce-discount-facebook-template.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "100vw" }}
            src="images/fashion-sale-banner-social-media-facebook-cover-web-advertising_207472-58.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "100vw" }}
            src="images/running-shoes-facebook-timeline-cover-web-template_173189-49.jpg"
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "100vw" }}
            src="images/sales-template-design-banner_23-2149174597.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;
