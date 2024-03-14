import {useState} from "react";
import "./card.css";
import useQueryVideos from "../hooks/useQueryVideos";
import Details from "./Details";

function Card({slide}) {
  const [open, setOpen] = useState(false);
  const {video, loading} = useQueryVideos(slide?.id)



  return (
    <div className="">
      <div className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w200${slide?.poster_path}`} />
        <div className="content">
          <p>{slide?.vote_average} | category</p>
          <h4>{slide?.title} </h4>

          <div className="card-icons" onClick={() => setOpen(true)}>
            <ion-icon name="add-outline"></ion-icon>
            <ion-icon name="play-outline"></ion-icon>
          </div>
        </div>
      </div>

      <Details open={open} onClose={()=> setOpen(false)} item={slide} itemVideo={video} loading={loading}/>

    </div>
  );
}

export default Card;
