import React from 'react'
import './movieContent.css'
import titleImg from '../Images/the-little-mermaid-title.png'
import Button from './Button'

// const MovieContent = ({selectedMovie}) => {
const MovieContent = ({selectedMovie}) => {

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
                  <span>category</span>
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