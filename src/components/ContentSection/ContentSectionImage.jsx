import React, { useEffect, useState } from "react";

const ContentSectionImage = ({ image }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:w-1/2 w-full flex items-center justify-center">
      {isLoading ? (
        <div className="w-[450px] h-[450px] bg-gray-200 animate-pulse rounded-full"></div>
      ) : (
        <img
          src={image}
          alt="Content"
          className="w-full max-w-[450px] h-[450px] object-cover transition-opacity duration-500 ease-in opacity-100 rounded-full"
        />
      )}
    </div>
  );
};

export default ContentSectionImage;
