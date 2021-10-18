import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ selected = false, onSelect = f => f }) => 
  (<FaStar color={selected ? "red" : "gray"} onClick={onSelect} />);

const StarRating = ({ style = {}, totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: "5px", ...style}}>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;