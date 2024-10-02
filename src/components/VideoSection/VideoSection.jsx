import React, { useState } from "react";
import backgroundImage from "../../assets/videoSectionImage.svg"; // Update with the actual path to the image
import { FaPlay } from "react-icons/fa";
import PlayBtn from "../../assets/playBtn.svg";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div
      className="relative w-full h-[457px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-50">
        {/* Text Content */}
        <h2 className="text-2xl font-medium text-black mb-4">
          Take a closer look
        </h2>
        <p className="text-lg font-light text-black mb-8">
          Experience what it's like to travel with the TripIt app.
        </p>

        {/* Play Button */}
        {!showVideo && (
          <img
            src={PlayBtn}
            alt="Play Button"
            className="w-28 h-28 object-contain cursor-pointer"
            onClick={handlePlayClick}
          />
        )}

        {/* Video Player */}
        {showVideo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-4/5 h-3/5"
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
