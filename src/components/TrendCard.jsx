import React, { useState } from "react";
import "./trendcard.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function TrendCard({ slide }) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      {open && (
        <Modal open={open} onClose={onCloseModal}>
          <div className="modalwidth">
            <h1>{slide.title}</h1>
          </div>
        </Modal>
      )}
      <div className="trend-card" onClick={onOpenModal}>
        <img
          className="img-fluid"
          src={`https://image.tmdb.org/t/p/w200${slide.poster_path}`}
        />
        <a href="#">
          Add to Calendar <ion-icon name="calendar-outtline"></ion-icon>
        </a>
      </div>
    </>
  );
}
export default TrendCard;
