import React from 'react';
import { FaStar } from 'react-icons/fa';  

const Star = ({ selected = false, onClick }) => 
  (<FaStar color={selected ? "red" : "gray"} onClick={onClick} />);

const StarRating = ({ style = {}, totalStars = 5, selectedStars = 0, onRate = f => f }) => {
  return (
    <div style={{ padding: "5px", ...style}}>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onClick={() => onRate(i + 1)}
          style={{ fill: 'blue' }}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;