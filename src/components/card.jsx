import React from 'react'
import './card.css'

function Card ({image,Rating,title,language,voteAverage}) {
  return (
   <div className=''> 
   <div className='movie-card'>
   <img src= {image} /> 
   <div className='content'>
    <p>{Rating} | category</p>    
    <h4>{title} </h4>

    <div className="card-icons">
      
    <ion-icon name="add-outline"></ion-icon>
    <ion-icon name="play-outline"></ion-icon>
    </div>
   </div>
     </div>
    

   </div>

  )
}

export default Card