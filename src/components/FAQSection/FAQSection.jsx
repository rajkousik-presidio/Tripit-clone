import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const FAQSection = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setExpandedQuestion((prev) => (prev === question ? null : question));
  };

  const faqs = [
    {
      question: "How does TripIt work?",
      answer: [
        `You handle the booking, we’ll take it from there. Simply forward your confirmation emails to plans@tripit.com and TripIt will automatically create a comprehensive itinerary for each of your trips—whether it’s a business trip, a family vacation or a quick weekend away.`,
        `TripIt supports almost any type of travel plan you have, from flights, hotel reservations, rental cars, trains, airport shuttles and cruise reservations, to travel agency bookings and even events booked on sites like OpenTable, Eventbrite and StubHub.`,
        `Within your itinerary you’ll see dates, times and confirmation numbers for each reservation. You can add plans to TripIt that don’t come with a confirmation email, along with notes or photos, right from your device.`,
      ],
    },
    {
      question: "What’s the difference between TripIt and TripIt Pro?",
      answer: [
        `While TripIt automatically organizes all your travel plans in one place, TripIt Pro helps you stay one step ahead—from planning to landing. For $49 per year, it’s packed with features that give you a heads up before things happen and help you navigate any surprises along the way.`,
        `TripIt Pro sends you helpful reminders and alerts so you don't miss a beat. It reminds you when to leave, tells you how long it should take—and shows you other options if you need to change your plans. It will even escort you directly to your gate, connection, or bags with walking directions—and help you find amenities along the way.`,
      ],
    },
    {
      question: "Which devices does it work on?",
      answer: [
        `Download the TripIt app for any number of devices, including your smartphone, tablet, or wearable device. You can even access your itinerary offline.`,
        `The TripIt app is available for iOS (including Apple Watch) and Android (including Android Wear).`,
      ],
    },
    {
      question: "How is it different from other apps?",
      answer: [
        `Unlike other apps, TripIt can organize all your travel plans no matter where you book. Simply forward your confirmation emails to plans@tripit.com and in a matter of seconds, TripIt will create a comprehensive itinerary for every trip.`,
      ],
    },
  ];

  return (
    <div className="w-full bg-[#F7F7F7]">
      <div className="py-8 px-4 pb-24 lg:px-0 lg:max-w-screen-lg w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-3xl font-medium mt-20 mb-6 text-center">
          Frequently asked questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-300 pt-4">
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
