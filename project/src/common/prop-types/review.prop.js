import PropTypes from 'prop-types';

const reviewProp = PropTypes.shape({
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
},
);

export default reviewProp;
