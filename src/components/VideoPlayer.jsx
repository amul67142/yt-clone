import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoSrc, title, description, profile, handle }) => {
  return (
    <div className="full-player">
      <ReactPlayer url={videoSrc} controls width="700px" height="600px" />
      <div className="d-inline-flex p-2 videodesc">
        <h5 className="vd-title"> {title}</h5>
        <h6 className="handle">
          <img src={profile} className="dp" alt=".." /> {handle}{" "}
          <button type="button" class="btn btn-light rounded-pill subs">
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
