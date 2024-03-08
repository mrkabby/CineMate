import React from 'react'

function Card(data, movies) {
  return (
   <div className='col=lg=2 col=md=4 col=sm=6'> 
   <div className='movie-card'>
  <img src={`https://image.tmdb.org/t/p/w500${data.movies.poster_path}`} alt='preview image' className='img-fluid'/>
    <P></P>
   </div>
   </div>

  )
}

export default Card