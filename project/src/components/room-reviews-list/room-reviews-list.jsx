import React from 'react';
import PropTypes from 'prop-types';
import RoomReviewItem from '../room-review-item/room-review-item';
import reviewProp from '../../common/prop-types/reviews.prop';

function RoomReviewsList(props) {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <RoomReviewItem
          key={review.id}
          review={review}
        />),
      )}
    </ul>
  );
}

RoomReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp),
};

export default RoomReviewsList;
