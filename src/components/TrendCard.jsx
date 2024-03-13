import React from 'react'
import './trendcard.css';
function TrendCard({slide}){
return(
    <div className='trend-card'>
        <img className='img-fluid' src={`https://image.tmdb.org/t/p/w200${slide.poster_path}`} />
        <a href='#'>
            Add to Calendar <ion-icon name="calendar-outtline"></ion-icon>
        </a>

    </div>
)
}
export default TrendCard;
