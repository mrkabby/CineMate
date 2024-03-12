import React from 'react'
import { useEffect, useState } from "react";
import './movieContent.css'
import titleImg from '../Images/the-little-mermaid-title.png'
import Button from './Button'

// const MovieContent = ({selectedMovie}) => {
const MovieContent = ({selectedMovie}) => {

  const [genres, setGenres] = useState([]);
  // const [getGenreName, setGetGenreName] = useState({})

  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=528f87728aee2ed45584d7e02ef65390"
    )
      .then((res) => res.json())    
      .then((data) => {
        if (data && data.genres) {
          setGenres(data.genres);
          console.log(data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((e) => console.error("Error fetching data:", e.message));
  };
  

  useEffect(() => {
    fetchData();
  }, []);
  

  function genreNames(genreIds, genres) {
    if (!genreIds || !genres) {
      return "Genre";
    }
  
    return genreIds.map((genreId) => {
      const foundGenre = genres.find((g) => g.id === genreId);
      return foundGenre ? ` ${foundGenre.name} ` : "Unknown Genre";
    });


  }
  


  return (
          <div className='content active'>
                {/* <img src={titleImg} alt="Movie Title" className="movie-title" /> */}
                <h1 className="movie-title"><i>{selectedMovie.title}</i></h1>
                <h2>
                  <span>{<ion-icon name="star-half-outline"></ion-icon>} {selectedMovie.vote_average}</span>
                  <span>
                    <i>age</i>
                  </span>
                  <span>{selectedMovie.original_language}</span>
                  <span>{genreNames(selectedMovie.genre_ids, genres)}</span>
                </h2>
                <p>{selectedMovie.overview}</p>
                <div className="button">
                  <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name='Book'  />
                  <Button icon={<ion-icon name="add-outline"></ion-icon>} name='My LIst' />
                </div>
              </div>
  )
}

export default MovieContent;