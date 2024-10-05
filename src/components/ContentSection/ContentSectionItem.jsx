import React from "react";

export default function ContentSectionItem({
  title,
  description,
  link,
  reverse,
  author,
  quote,
  children,
}) {
  return (
    <div
      className={`flex flex-col-reverse lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center justify-center lg:w-[90%] tablet:w-[75%] md:w-[63%] max-w-screen-xl mx-auto md:px-16 px-8 gap-16 mb-20`}
    >
      <div className="tablet:w-2/5 lg:w-1/2 w-full max-w-[450px] mb-4 p-6">
        <h2 className="text-[28px] font-medium text-black mb-4">{title}</h2>
        <p className="text-base font-light text-black mb-8 tracking-wider">
          {description}
        </p>
        {link && (
          <a
            href="#"
            className="text-primary font-medium underline mb-8 block underline-offset-4 decoration-primary hover:text-black"
          >
            {link}
          </a>
        )}
        {quote && (
          <p className="italic font-thin tracking-wide leading-7 text-gray-500 mb-2">
            "{quote}"
          </p>
        )}
        {author && (
          <p className="font-thin tracking-wide italic text-gray-500 text-right mt-4">
            - {author}
          </p>
        )}
      </div>

      {children}
    </div>
  );
}
