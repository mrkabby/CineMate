import React from 'react'
import './topRatedCard.css'

function TopRatedCard({ image, title, language, voteAverage }) {
    return (
        <div className=''>
            <div className='movie-card'>
                <img src={image} alt='' />

                <div className='content'>
                    <p>{voteAverage}  </p>
                    <p>{language}</p>
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

export default TopRatedCard