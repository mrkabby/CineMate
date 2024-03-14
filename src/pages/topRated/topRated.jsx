import React, { useEffect, useState } from 'react';
import './topRated.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import TopRatedCard from '../../components/topRatedCard';


const TopRated = () => {
    // const [data, setData] = useState([])
    const [tmovies, setTmovies] = useState([])

    const fetchData = () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ce84f9a1e267020ce2e0b6973f4fcbbc')
            .then(res => res.json())
            .then(data => setTmovies(data.results))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    // // useEffect(() => {
    // //     setMovies(data);
    // });

    return (
        <section id='toprated' className='toprated'>
            <div className='container-fluid'>
                <div className='row'>
                    <h4 className='section-title'>TOP RATED MOVIES</h4>
                </div>
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
                        className="ratedSwiper"

                    >
                        <div className='rated'>

                            {/* {movies && movies.length > 0 && movies.map(movie => ( */}
                            {tmovies.map((movies) => {
                                const imageUrl = `https://image.tmdb.org/t/p/w500${movies.poster_path}`

                                return (
                                    <SwiperSlide >

                                        <TopRatedCard
                                            image={imageUrl}
                                            title={movies.title}
                                            Rating={movies.vote_average}
                                            language={movies.original_language}


                                        />
                                    </SwiperSlide>
                                )
                            })}
                           
                    

                        </div>

                    </Swiper>






                </div>

            </div>
        
        </section > 
    )
}

export default TopRated