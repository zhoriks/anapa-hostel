import React from 'react';
import { useSelector } from 'react-redux';

const Reviews = () => {
  const reviews = useSelector((state) => state.adminReviews.list);
  console.log(reviews);
  return (
    <div>
      hello
    </div>
  );
};

export default Reviews;
