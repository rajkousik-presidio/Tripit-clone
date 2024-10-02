import React, { useState, useEffect, useRef } from "react";
import backgroundImage from "../../assets/videoSectionImage.svg"; // Update with the actual path to the image
import PlayBtn from "../../assets/playBtn.svg";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  // Disable scrolling when the video is open and handle page view
  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow style when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showVideo]);

  // Use IntersectionObserver to check if the VideoSection is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.8, // 80% of the section should be visible to consider it in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleCloseClick = () => {
    setShowVideo(false);
    if (!isSectionVisible) {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center", // Scroll the section to the vertical center of the viewport
      });
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[457px] lg:bg-cover lg:bg-center md:bg-contain bg-contain"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center", // Full-size for smaller screens
      }}
    >
      {/* Overlay for content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:bg-none md:bg-opacity-0 bg-black bg-opacity-50">
        {/* Text Content */}
        <h2 className="text-2xl font-normal tracking-wide md:text-black text-white mb-6">
          Take a closer look
        </h2>
        <p className="md:text-xl text-sm font-light md:text-black text-white mb-8">
          Experience what it's like to travel with the TripIt app.
        </p>

        {/* Play Button */}
        {!showVideo && (
          <img
            src={PlayBtn}
            alt="Play Button"
            className="w-28 h-28 object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={handlePlayClick}
          />
        )}

        {/* Video Player */}
        {showVideo && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
            <div className="relative w-full max-w-6xl mx-auto p-4 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
                style={{ maxHeight: "80vh" }}
              ></iframe>
              <button
                onClick={handleCloseClick}
                className="absolute -top-6 right-6 text-gray-500 hover:text-white text-2xl focus:outline-none"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
