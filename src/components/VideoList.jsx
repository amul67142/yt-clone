  
import VideoItem from "./VideoItem";
import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import VideoPlayer from "./VideoPlayer";


const VideoList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedVideoSrc, setSelectedVideoSrc] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");
  const [selectedVideoDesc, setSelectedVideoDesc] = useState("");
  const [selectedDp, setSelectedDp] = useState(null);
  const [selectedHandle, setSelectedHandle] = useState(null);
 
 

  const fetchdata = async () => {
    setLoading(true);
    let url = `https://internship-service.onrender.com/videos?page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPosts(parsedData.data.posts);
    setLoading(false);
  };
  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  

  const handlePrev = () => {
    console.log("prev");
    setPage(page - 1);
  };

  const handleNext = () => {
    console.log("next");
    setPage(page + 1);
  };

  const handleThumbnailClick = (videoSrc, title, desc, dp, handle) => {
    console.log("clicked");
    setSelectedVideoSrc(videoSrc);

    setSelectedVideoTitle(title);
    setSelectedVideoDesc(desc);
    setSelectedDp(dp);
    setSelectedHandle(handle);
  
  
  };

  const handleVideoPlayerClose = () => {
    setSelectedVideoSrc(null);
   // Go back to the previous page
  };
 
  return (
    <>
    
        
      {selectedVideoSrc ? (
        <VideoPlayer
          videoSrc={selectedVideoSrc}
          title={selectedVideoTitle}
          onClose={handleVideoPlayerClose}
          description={selectedVideoDesc}
          profile={selectedDp}
          handle={selectedHandle}
        />
      ) : (
        <>
          <div className="container my-3">
            <div className="row my-3">
              {loading ? (
                <Loading />
              ) : (
                
                posts.map((element) => {
                  return (
                    <div className="col-md-3" key={element.postId}>
                      <VideoItem
                        title={element.submission.title}
                        dp={element.creator.pic}
                        desc={element.creator.handle}
                        imgUrl={element.submission.thumbnail}
                        videoId={element.submission.mediaUrl}
                        onClick={() =>
                          handleThumbnailClick(
                            element.submission.mediaUrl,
                            element.submission.title,
                            element.submission.description,
                            element.creator.pic,
                            element.creator.handle
                          )
                        }
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>



         


          <div className="container pgn-box d-flex justify-content-evenly">
        <button
          type="button"
          className="btn btn-dark pr-btn"
          onClick={handlePrev}
          disabled={page === 0}
        >
          &larr; Prev
        </button>

        <div className="pagination-links">
          {page > 0 && (
            <button
              type="button"
              className="btn btn-dark btn-pgn rounded-pill"
              onClick={() => setPage(page - 1)}
            >
              {page - 1}
            </button>
          )}
          <button
            type="button"
            className="btn btn-pgn rounded-pill btn-primary btn-custom active"
          >
            {page}
          </button>
          {page < 9 && (
            <button
              type="button"
              className="btn  btn-pgn rounded-pill btn-dark"
              onClick={() => setPage(page + 1)}
            >
              {page + 1}
            </button>
          )}
        </div>

        <button
          type="button"
          className="btn btn-dark next pr-btn"
          onClick={handleNext}
          disabled={page === 9}
        >
          Next &rarr;
        </button>
      </div>
      </>
     
     
      )}
     
    </>
  );
};

export default VideoList;
