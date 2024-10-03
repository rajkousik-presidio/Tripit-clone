import React, { useState, useEffect } from "react";
import axios from "../../utils/axiosConfig"; // Import the Axios instance

const FeaturedSection = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    // Fetch logos from db.json
    const fetchLogos = async () => {
      try {
        const response = await axios.get("/logos");
        setLogos(response.data);
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };

    fetchLogos();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto lg:mt-32 mt-16 mb-32 px-4 lg:px-0">
      <h3 className="text-2xl font-medium text-center mb-8">As featured on</h3>
      <div className="flex flex-wrap justify-center items-center gap-16 lg:flex-row flex-col">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className={`flex items-center justify-center ${logo.size} h-auto`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
