import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import axios from "../../utils/axiosConfig"; // Import the Axios instance

const FAQSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const toggleQuestion = (question) => {
    setExpandedQuestion((prev) => (prev === question ? null : question));
  };

  // Fetch FAQs from db.json
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get("/faqs");
        setFaqs(response.data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="w-full bg-[#F7F7F7]">
      <div className="py-8 px-4 pb-24 lg:px-0 lg:max-w-screen-lg w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-3xl font-medium mt-20 mb-6 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-t border-gray-300 pt-4">
              <div
                className="flex justify-between items-center cursor-pointer py-3"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-[20px] font-medium">{faq.question}</h3>
                <div className="w-10 flex items-center justify-center font-bold">
                  {expandedQuestion === index ? (
                    <i
                      size={24}
                      className="bi bi-chevron-up text-primary"
                      style={{ "-webkit-text-stroke": "2.5px" }}
                    ></i>
                  ) : (
                    <i
                      size={24}
                      className="bi bi-chevron-down text-primary"
                      style={{ "-webkit-text-stroke": "2.5px" }}
                    ></i>
                  )}
                </div>
              </div>
              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  expandedQuestion === index
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-[16px] font-light tracking-wide text-gray-700 mt-3"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <p className="lg:text-xl text-base text-black font-thin">
            Still have questions about TripIt? We suggest a visit to our{" "}
            <a href="#" className="text-primary hover:underline">
              help center
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
