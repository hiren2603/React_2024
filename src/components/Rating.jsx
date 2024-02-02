import React from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const StarIcon = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 ${filled ? "text-yellow-500" : "text-gray-400"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 1l2.938 6.654 7.062.896-5.375 5.157 1.313 7.688L10 16.733l-6.938 3.662 1.313-7.688L.999 8.55l7.062-.896L10 1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Rating = ({ rating }) => {
  const starComponents = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      starComponents.push(<FaStar key={i} />);
    } else if (i - rating >= 0.5) {
      starComponents.push(<FaStarHalf key={i} />);
    } else {
      starComponents.push(<FaRegStar key={i} />);
    }
  }

  return <div className="flex items-center">{starComponents}</div>;
};

export default Rating;
