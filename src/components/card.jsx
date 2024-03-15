import {useState} from "react";
import "./card.css";
import useQueryVideos from "../hooks/useQueryVideos";
import Details from "./Details";

function Card({slide}) {
  const [open, setOpen] = useState(false);
  const {video, loading} = useQueryVideos(slide?.id)



  return (
    <div style={{position: 'relative'}}>
      <div style= {{width:'200px'}}className="movie-card">
        <img style= {{width:'200px'}} src={`https://image.tmdb.org/t/p/w500${slide?.poster_path}`} />
        <div className="content">
          
          <h4>{slide?.title} </h4>

          <div className="card-icons" onClick={() => setOpen(true)}>
          
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>

      <Details open={open} onClose={()=> setOpen(false)} item={slide} itemVideo={video} loading={loading}/>

    </div>
  );
}


export default Card;

