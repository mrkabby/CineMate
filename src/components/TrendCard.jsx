import { useState} from "react";
import "./trendcard.css";
import Details from "./Details";
import useQueryVideos from "../hooks/useQueryVideos";

function TrendCard({ slide }) {
  const [open, setOpen] = useState(false);
 const {video, loading} = useQueryVideos(slide.id)




  return (
    <div>

        <div>
          <div className="trend-card" onClick={() => setOpen(true)}>
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w200${slide.poster_path}`}
            />
            <div className="content">
          
          <h4>{slide?.title} </h4>

          <div className="card-icons" onClick={() => setOpen(true)}>
           
            <ion-icon name="play-outline"></ion-icon>
          </div>
            <Details open={open} onClose={()=> setOpen(false)} item={slide} itemVideo={video} loading={loading}/>
          </div>
        </div>
    </div>
    </div>

     
      
    
  );
}
export default TrendCard;
