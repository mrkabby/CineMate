import React, { useEffect, useState } from "react";
import "./trend.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import TrendCard from "../../components/TrendCard";
import Header from "../header/Header";

function Trend() {
  const [slides, setSlides] = useState([]);
  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSlides(data.results);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section id="upcoming" className="trend">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">UPCOMING MOVIES </h4>
            <div className="row">
              <div>
                <Swiper
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  breakpoints={{
                    0: { slidesPerView: 1.2 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                  }}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination, Autoplay]}
                  className="trendSwiper"
                >
                  {slides.length > 0 &&
                    slides.map((slide) => {
                      return (
                        <SwiperSlide key={slide.id}>
                          <TrendCard slide={slide} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trend;
