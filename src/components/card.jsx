import React from 'react'
import './card.css'

function Card ({image,title, overview, release, adult,language,popularity,video,voteAverage, voteCount, backdrop}) {
  return (
   <div className='col=lg=2 col=md=4 col=sm=6'> 
   <div className='movie-card'>
   <img src= {image} /> 
   <div className='content'>
    <h3>{title}</h3>    
    <p>{release}</p>
    
    
   </div>
    

    <div className="card-icons"></div>
    <ion-icon name="add-outline"></ion-icon>
    <ion-icon name="play-outline"></ion-icon>
   </div>
   </div>

  )
}

export default Card