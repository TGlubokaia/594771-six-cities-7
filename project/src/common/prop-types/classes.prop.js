import PropTypes from 'prop-types';

const classesProp = PropTypes.shape({
  COMMON: PropTypes.string.isRequired,
  ITEM: PropTypes.string.isRequired,
});

export default classesProp;
