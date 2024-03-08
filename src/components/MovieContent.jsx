import React from 'react'
import './movieContent.css'
import titleImg from '../Images/the-little-mermaid-title.png'
import Button from './Button'

// const MovieContent = ({selectedMovie}) => {
const MovieContent = () => {

  // if (!selectedMovie) {
  //   // Return a message or null if there's no selected movie
  //   return <p>No movie selected</p>;
  // }

  // // Destructure the properties from selectedMovie
  // const { title, overview, release_date } = selectedMovie;


  return (
          <div className='content active'>
                <img src={titleImg} alt="Movie Title" className="movie-title" />
                {/* <h1>{title}</h1> */}
                <h4>
                  <span>Year</span>
                  <span>
                    <i>age</i>
                  </span>
                  <span>length</span>
                  <span>category</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet quisquam praesentium saepe, doloribus quis recusandae omnis exercitationem ut possimus asperiores eum fugit non nihil! Consequatur ducimus quos aliquam consequuntur.
                </p>
                <div className="button">
                  <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name='Book' color='#ff3700' bgcolor='#ffffff' />
                  <Button icon={<ion-icon name="add-outline"></ion-icon>} name='My LIst' />
                </div>
              </div>
  )
}

export default MovieContent;