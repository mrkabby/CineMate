import { useState} from "react";
import './playBtn.css';
import Details from "./Details";
import useQueryVideos from "../hooks/useQueryVideos";

const PlayBtn = ({slide}) => {
  const [open, setOpen] = useState(false);
  const {video, loading} = useQueryVideos(slide.id)


  return (
    <div>

    <div className="trailer   d-flex align-items-center justify-content-center active" onClick={() => setOpen(true)}>
    <a href="#" className="playBtn">
      <ion-icon name="play-outline"></ion-icon>
    </a>
    <p>Watch trailer</p>
  </div>
  <Details open={open} onClose={()=> setOpen(false)} item={slide} itemVideo={video} loading={loading}/>
    </div>
  )
}

export default PlayBtn;