import PropTypes from 'prop-types';

const pointProp = PropTypes.shape ({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
});

export default pointProp;
