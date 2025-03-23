import React from "react";

const SectionHeading = ({ text, highlightedText }) => {
  return (
    <h1 className="text-8 font-semibold text-white">
      {text} <span className="text-primary-400">{highlightedText}</span>
    </h1>
  );
};

export default SectionHeading;
