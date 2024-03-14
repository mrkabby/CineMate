import React from 'react'
import './card.css'

function Card ({image,title,}) {
  return (
   <div className=''> 
   <div style={{width: "200px"}} className='movie-card'>
   <img style={{width: "200px"}} src= {image} /> 
   <div className='content'>
       
    <h4>{title} </h4>

    <div className="card-icons">
      
   
    <ion-icon name="play-outline"></ion-icon>
    </div>
   </div>
     </div>
    

   </div>

  )
}

export default Card