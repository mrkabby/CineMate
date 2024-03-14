import React from 'react';
import './toprated.css';
import '../../components/card.css'
import Card from '../../components/card';


function TopCard({ slide }) {
    return (

        <div className='trend-card'>
            <img className='img-fluid' src={`https://image.tmdb.org/t/p/w200${slide.poster_path}`} />
            {/* <a href='#'>
            Add to Calendar <ion-icon name="calendar-outtline"></ion-icon>
        </a> */}
            <Card>
                title={slide.title}
                Rating={slide.vote_average}
            </Card>

        </div>
    )
}
export default TopCard;