import React from 'react'
import './trendcard.css';

function TrendCard({ image, title, date, language }) {
    return (
        <div className=''>
            <div className='trend-card'>
                <img src={image} alt='' />

                <div className='content'>

                    <h4>{title} </h4>
                    <p>{language}</p>
                    <p> {date} </p>


                    <div className="trend-icons">

                        <ion-icon name="add-outline"></ion-icon>
                        <ion-icon name="play-outline"></ion-icon>
                        <a href='#'>
                            Add to Calendar <ion-icon name="calendar-outtline"></ion-icon>
                        </a>

                    </div>


                </div>
            </div>


        </div>

    )
}

export default TrendCard




// import React from 'react'
// import './trendcard.css';
// function TrendCard({slide}){
// return(
//     <div className='trend-card'>
//         <img className='img-fluid' src={`https://image.tmdb.org/t/p/w200${slide.poster_path}`} />
//         <a href='#'>
//             Add to Calendar <ion-icon name="calendar-outtline"></ion-icon>
//         </a>

//     </div>
// )
// }
// export default TrendCard;
