import React from "react";
import "./Lightbox.css";

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="lightbox">
      <div className="wrapper">
        <header>
          <div className="photographer">
            <span>{image.photographer}</span>
          </div>
          <div className="buttons">
            <button className="close-icon" onClick={onClose}>
              X
            </button>
          </div>
        </header>
        <div className="preview-img">
          <img src={image.src.large2x} alt="preview" />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
