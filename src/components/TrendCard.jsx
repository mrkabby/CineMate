import React from 'react'
import './trendcard.css';

function TrendCard({ image, title }) {
    return (
        <div className=''>
            <div style={{width: "200px"}} className='trend-card'>
                <img style={{width: "200px"}} src={image} alt='' />

                <div className='content'>

                    <h4>{title} </h4>
                    

                    <div className="trend-icons">

                       
                        <ion-icon name="play-outline"></ion-icon>

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
