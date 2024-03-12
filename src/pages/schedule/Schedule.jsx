import React, { useState, useEffect } from 'react'
import './Schedule.css';
import Card from '../../components/card';

const Schedule = () => {
    // const [data, setData] = useState([])
    const [movies, setMovies] = useState([])

    const fetchData = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=ce84f9a1e267020ce2e0b6973f4fcbbc')
            .then(res => res.json())
            .then(data => setMovies(data.results))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    // // useEffect(() => {
    // //     setMovies(data);
    // });





    return (
        <section id='schedule' className='schedule'>
            <div className='container-fluid'>
                <div className='row'>
                    <h4 className='section-title'>MOST POPULAR MOVIES</h4>
                </div>
                <div className='row'>
                    <div className='filters'>
                        <p>Filters</p>
                    </div>
                    <div className='row mt-5'>
                        {/* {movies && movies.length > 0 && movies.map(movie => ( */}
                        {movies.map((movie) => {
                            const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            return (
                                <Card
                                    image={imageUrl}
                                    title={movie.title}                                   
                                    release={movie.release_date}
                                   
                                  

                                />
                            )
                        })}

                    </div>

                </div>
            </div>
        </section >
    )
}

export default Schedule