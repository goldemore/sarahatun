import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import img1 from "../logoimg/head_image.png";
import img2 from "../logoimg/head_image2.jpg";
import img3 from "../logoimg/head_image3.jpg";
import img4 from "../logoimg/head_image4.jpg";

const Hero = () => {
  return (
    <div className="header_background_image">
      <Swiper
        style={{ height: "90vh" }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        speed={1500}
      >
        <SwiperSlide>
          <div
            className="slideStyle"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <h1 className="head_slogan">Zərif və güclü</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slideStyle"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <h2 className="head_slogan">Dolu Qardirob</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slideStyle"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <h2 className="head_slogan">Alış Veriş</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slideStyle"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <h2 className="head_slogan">Fərqli çeşid</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
