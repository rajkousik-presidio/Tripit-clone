import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FAQSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  const faqs = [
    {
      question: "How does TripIt work?",
      answer: `You handle the booking, we’ll take it from there. Simply forward your confirmation emails to plans@tripit.com and TripIt will automatically create a comprehensive itinerary for each of your trips—whether it’s a business trip, a family vacation or a quick weekend away.

      TripIt supports almost any type of travel plan you have, from flights, hotel reservations, rental cars, trains, airport shuttles and cruise reservations, to travel agency bookings and even events booked on sites like OpenTable, Eventbrite and StubHub.

      Within your itinerary you’ll see dates, times and confirmation numbers for each reservation. You can add plans to TripIt that don’t come with a confirmation email, along with notes or photos, right from your device.`,
    },
    {
      question: "What’s the difference between TripIt and TripIt Pro?",
      answer:
        "TripIt Pro offers additional premium features such as real-time flight alerts, finding alternate flights, and fare refund monitoring.",
    },
    {
      question: "Which devices does it work on?",
      answer:
        "TripIt works on iOS, Android, and any web browser for seamless access to your travel plans.",
    },
    {
      question: "How is it different from other apps?",
      answer:
        "TripIt allows you to organize all your travel plans in one place, providing a comprehensive itinerary and real-time updates.",
    },
  ];

  return (
    <div className="w-full py-8 px-4 lg:px-0 max-w-screen-lg mx-auto">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-center lg:text-left">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer py-3"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {expandedQuestion === index ? (
                <MdKeyboardArrowUp size={24} className="text-primary" />
              ) : (
                <MdKeyboardArrowDown size={24} className="text-primary" />
              )}
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                expandedQuestion === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-700 mt-3">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-600">
          Still have questions about TripIt? We suggest a visit to our{" "}
          <a href="#" className="text-primary hover:underline">
            help center
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
