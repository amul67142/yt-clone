import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({
  videoSrc,
  title,
  description,
  profile,
  handle,
  onClose,
}) => {
  const handleCloseClick = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  return (
    <div className="full-player">
      <button
        type="button"
        className=" btn btn-dark rounded-pill cls "
        onClick={handleCloseClick}
      >
        <span class="material-icons back">navigate_before</span>
      </button>
      <ReactPlayer url={videoSrc} controls width="700px" height="600px" />
      <div className="d-inline-flex p-2 videodesc">
        <h5 className="vd-title"> {title}</h5>
        <h6 className="handle">
          <img src={profile} className="dp" alt=".." /> {handle}
          <button type="button" className="btn btn-light rounded-pill subs">
            Subscribe
          </button>
        </h6>
        <div className="desc-box">
          <p className="vd-desc">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

//
