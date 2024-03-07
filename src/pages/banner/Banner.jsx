import React, { useEffect, useState } from "react";
import "./banner.css";
// import bgImg from "../../Images/bg-little-mermaid.jpg";
import MovieContent from "../../components/MovieContent";
import MovieDate from "../../components/MovieDate";
import PlayBtn from "../../components/PlayBtn";
import MovieSwiper from "../../components/MovieSwiper";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=528f87728aee2ed45584d7e02ef65390"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = id => {

  }

  return (
    <div className="banner">
      {
        movies && movies.lenth>0 && movies.map(movie=>(
          <div className="movie">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Background" className={`bgImg ${movie.active ? 'id' : undefined}`} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={movie} />
              </div>
              <div className="col-lg-6 col-md-12">
                <MovieDate movie={movie} />
                <PlayBtn movie={movie} />
              </div>
            </div>
          </div>
        </div>
        ))
      }
   
      {
        movies && movies.length>0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      }
      
    </div>
  );
};

export default Banner;
