import ripple from '../Images/ripple.svg'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import YouTube from "react-youtube";
import './details.css'
import Button from './Button';

const Details = ({open, onClose, item, itemVideo, loading}) => {
    const onPlayerReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

  return (
    <div>
    <Modal
      open={open}
      onClose={onClose}
      center
      id="setItem"
      classNames={{
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
      }}
      animationDuration={800}
      showCloseIcon={false}
    >
      {loading ? (
      <img src={ripple} />
    ) : 
      <div className="modalwidth">
        <div key={itemVideo?.id}>
            <div class="d-flex justify-content-between">
          <h2>{itemVideo?.name}</h2>
          <Button name='Close'/>
          </div>
          <YouTube videoId={itemVideo?.key} onReady={onPlayerReady} />
        </div>
        <div className='content'>
        <h1><i>{item.title} | {<ion-icon name="star-half-outline"></ion-icon>} {item.vote_average} | {item.original_language}</i></h1>
        <h1>{item.release_date}</h1>
        <h3>{item.overview}</h3>
        </div>
      </div>}
    </Modal>
  </div>
  )
}

export default Details