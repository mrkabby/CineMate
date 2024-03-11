import React, { useEffect, useState } from 'react';
import './trend.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import TrendCard from '../../components/TrendCard'


function Trend() {
    const [slides, setSlides] = useState([]);
    const fetchData = () => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=ce84f9a1e267020ce2e0b6973f4fcbbc')
            .then(res => res.json())
            .then(data => {
                setSlides(data.results);
                console.log(slides);
            })
            .catch(e => console.log(e.message));



    };


    useEffect(() => {
        fetchData();
    }, []);



    return (
        <section id='trend' className='trend'>
            <div className='container-fluid'>
                <div className='row'>
                    <h4 className='section-title'>UPCOMING </h4>
                    <div className='row'>

                        <Swiper
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            slidesPerView={3}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination, Autoplay]}
                            className="trendSwiper"
                        >
                            {slides.length > 0 &&
                                slides.map((slide, index) => (
                                    <SwiperSlide key={slide.id}>
                                        <TrendCard slide={slide} />
                                        <p>{index}</p>
                                    </SwiperSlide>
                                ))
                            }
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Trend;
