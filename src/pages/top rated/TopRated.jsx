import React, { useEffect, useState } from 'react';
import './toprated.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import TopRatedCard from '../../components/topratedCard';



function TopRated() {
    const [slides, setSlides] = useState([]);
    const fetchData =  () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=528f87728aee2ed45584d7e02ef65390')
            .then(res => res.json())
            .then(data => {
                setSlides(data.results);
                console.log(slides);
            })
            .catch(e => console.log(e.message));

 

    };


    useEffect(() => {
        fetchData();
    }, );



    return (
        
        <section id='trend' className='trend'>
            <div className='container-fluid'>
                <div className='row'>
                    <h4 className='section-title'>Top Rated </h4>
                    <div className='row'>

                    

                        <Swiper

                        
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            slidesPerView={5}
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
                                        <TopRatedCard slide={slide} />
                                        <p>{index}</p>
                                        
                                    </SwiperSlide>
                                    
                                    
                                ))
                            }
                          
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default TopRated;
