import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false }) => 
  (<FaStar color={selected ? "red" : "gray"} />);

const StarRating = ({ style = {}, totalStars = 5, selectedStars = 0 }) => {
  return (
    <div style={{ padding: "5px", ...style}}>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;