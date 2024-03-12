import React from "react";
import "./movieSwiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow } from "swiper/modules";

const MovieSwiper = ({ slides, slideChange }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{
        delay: 2500,
        disableOnIntekaction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} alt="Preview" onClick={()=>slideChange(slide.id)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieSwiper;
