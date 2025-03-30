import React from "react";
import Button from "./Button";

const SectionHeading = ({ showViewAll = true, text, highlightedText }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-8 font-semibold text-white">
        {text} <span className="text-primary-400">{highlightedText}</span>
      </h1>
      {showViewAll && (
        <Button className="md:hidden" variant="secondary" type="text">
          View all{" "}
        </Button>
      )}
    </div>
  );
};

export default SectionHeading;
