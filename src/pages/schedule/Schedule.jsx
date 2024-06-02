import React, { useState, useEffect } from "react";
import "./Schedule.css";
import Card from "../../components/card";
import Header from "../header/Header";

const Schedule = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <section id="popular" className="schedule">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">MOST POPULAR MOVIES</h4>
          </div>
          <div className="row">
            <div className="filters">
              <p>Filters</p>
            </div>
            <div className="trial">
              {movies.map((movie) => {
                return <Card key={movie.id} slide={movie} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
