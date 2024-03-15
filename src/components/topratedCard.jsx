import { useState} from "react";
import './topratedCard.css'
import Details from "./Details";
import useQueryVideos from "../hooks/useQueryVideos";

function TopRatedCard({ slide  }) {
    const [open, setOpen] = useState(false);
    const {video, loading} = useQueryVideos(slide.id)


    return (
        <div  style= {{width: "200px"}} className=''>
            <div className='movie-card'>
                <img style={{width: "200px"}} src={`https://image.tmdb.org/t/p/w500${slide.poster_path}`} alt='' />

                <div className='content'>
                    
                    
                    <h4>{slide.title} </h4>


                    <div className="card-icons" onClick={() => setOpen(true)}>

                       
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
                <Details open={open} onClose={()=> setOpen(false)} item={slide} itemVideo={video} loading={loading}/>
            </div>


        </div>

    )
}

export default TopRatedCard