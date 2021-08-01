import PropTypes from 'prop-types';

const offerProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    cityName: PropTypes.string.isRequired,
  }),
  goods: PropTypes.arrayOf(PropTypes.string),
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  previewImage: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number.isRequired,
  host: PropTypes.shape({
    hostAvatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    hostName: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }),
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
},
);

export default offerProp;
