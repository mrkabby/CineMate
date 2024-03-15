import React, { useEffect, useState } from "react";
import "./banner.css";
import MovieContent from "../../components/MovieContent";
import MovieDate from "../../components/MovieDate";
import PlayBtn from "../../components/PlayBtn";
import MovieSwiper from "../../components/MovieSwiper";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

  // This function fetches top rated movie data and stores it in 'movies' object
  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=528f87728aee2ed45584d7e02ef65390"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        // Set the selected movie to the first movie in the array
        setSelectedMovie(data.results[0]);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // This function changes movie info when image is clicked
  const handleSlideChange = (id) => {
    // Find movie that was clicked
    const clickedMovie = movies.find((movie) => movie.id === id);
    // Update selectedMovie state
    setSelectedMovie(clickedMovie);
    console.log(clickedMovie);
  };

  return (
    <div className="banner">
      <div className="movie">
        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
          alt=""
          className="bgImg active"
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <MovieContent selectedMovie={selectedMovie} />
            </div>
            <div className="col-lg-6 col-md-12">
              <MovieDate selectedMovie={selectedMovie} />
              <PlayBtn slide={selectedMovie} />
            </div>
          </div>
        </div>
      </div>

      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
};

export default Banner;
