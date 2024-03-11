import React from 'react';
import './movieDate.css'

const MovieDate = ({selectedMovie}) => {
  return (
    <div className="date active">
    <h2>ON {selectedMovie.release_date}</h2>
  </div>
  )
}

export default MovieDate;