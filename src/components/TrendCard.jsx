
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

import { useState, useEffect } from "react";
import "./trendcard.css";

import Details from "./Details";
import useQueryVideos from "../hooks/useQueryVideos";

function TrendCard({ slide }) {
  const [open, setOpen] = useState(false);
 const {video, loading} = useQueryVideos(slide.id)




  return (
    <>  
        <div>
          <div className="trend-card" onClick={() => setOpen(true)}>
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w200${slide.poster_path}`}
            />
            <a href="#">
              Add to Calendar <ion-icon name="calendar-outtline"></ion-icon>
            </a>
            <Details open={open} onClose={()=> setOpen(false)} item={slide} itemVideo={video} loading={loading}/>
          </div>
        </div>
      
    </>
  );

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
