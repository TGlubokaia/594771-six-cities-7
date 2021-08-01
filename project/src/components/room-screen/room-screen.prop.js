import PropTypes from 'prop-types';

const reviewDataProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  userRating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  user: PropTypes.shape({
    userAvatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired,
  },
  )},
);

export default reviewDataProp;
