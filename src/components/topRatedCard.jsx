import React from 'react'
import './topRatedCard.css'

function TopRatedCard({ image, title  }) {
    return (
        <div  style= {{width: "200px"}} className=''>
            <div className='movie-card'>
                <img style={{width: "200px"}} src={image} alt='' />

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

export default TopRatedCard