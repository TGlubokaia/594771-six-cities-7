import PropTypes from 'prop-types';

const classesProp = PropTypes.shape({
  COMMON: PropTypes.string.isRequired,
  ITEM: PropTypes.string.isRequired,
  ADD: PropTypes.string.isRequired,
  WRAPPER: PropTypes.string.isRequired,
});

export default classesProp;
