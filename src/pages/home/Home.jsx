import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_MOVIE_API_BEARER}`
          }
        }
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div id="heroSwiperWrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id} className="heroSlide">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie"/>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiperOverlay">
          <div className="content">
            <h1>Unlimited movies </h1>
            <p>Binge all your favorite movies in one place</p>
            <Link to="/landing">
              <div className="custom-button">
                <span className="background-overlay"></span>
                <span className="icon-container">
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="button-text">Get Started</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
