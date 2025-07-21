import React from "react";

const DateDisplay = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="text-lg text-gray-600 text-left">
      {formattedDate}
    </div>
  );
};

export default DateDisplay;
