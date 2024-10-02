import React, { useState, useEffect } from "react";
import blogImage1 from "../../assets/blogImage1.png";
import blogImage2 from "../../assets/blogImage2.png";
import blogImage3 from "../../assets/blogImage3.png";

const blogPosts = [
  {
    image: blogImage1,
    title: "New Search Tool Added for Locating Trip Details in TripIt for iOS",
    description:
      "With a few keywords, you can now search within your travel plans (past and upcoming) to find trip details.",
  },
  {
    image: blogImage2,
    title: "City Break: Manhattan",
    description:
      "In this series from TripIt, we explore some of the world’s best cities for planning a quick getaway or extending a work trip.",
  },
  {
    image: blogImage3,
    title:
      "New Enhancements for Navigating Travel Based on Your Vaccination Status",
    description:
      "Find information about vaccination rates and requirements, approved vaccines, exemptions for vaccinated travelers, and more, right in TripIt’s COVID-19 travel guidance feature.",
  },
];

const BlogComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle manual dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8 lg:px-0 my-32">
      <h2 className="text-2xl font-medium text-black text-center mb-8">
        More from our blog
      </h2>
      <div className="flex flex-wrap lg:flex-row gap-8 justify-center items-stretch transition-transform duration-500 ease-in-out">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              currentIndex === index ? "block" : "hidden lg:flex"
            } w-full lg:w-[30%] md:w-1/2 sm:w-2/3 transition-opacity duration-500 ease-in-out`}
          >
            <div className="w-full max-w-[400px] h-auto flex flex-col items-center justify-center">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
              <div className="w-full mt-8">
                <h4 className="text-xl font-medium text-black mb-4 text-left tracking-wide">
                  {post.title}
                </h4>
                <p className="text-base tracking-wide font-light text-gray-700 text-left">
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for smaller screens */}
      <div className="lg:hidden flex justify-center items-center mt-8 gap-2">
        {blogPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
