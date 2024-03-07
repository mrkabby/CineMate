import React from 'react'
import './movieContent.css'
import titleImg from '../Images/the-little-mermaid-title.png'
import Button from './Button'

const MovieContent = ({movie}) => {
  return (
          <div className={`content ${movie.active ? 'active': undefined}`}>
                <img src={movie.title} alt="Movie Title" className="movie-title" />
                <h4>
                  <span>Year</span>
                  <span>
                    <i>age</i>
                  </span>
                  <span>length</span>
                  <span>category</span>
                </h4>
                <p>
                  {movie.overview}
                </p>
                <div className="button">
                  <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name='Book' color='#ff3700' bgcolor='#ffffff' />
                  <Button icon={<ion-icon name="add-outline"></ion-icon>} name='My LIst' />
                </div>
              </div>
  )
}

export default MovieContent;