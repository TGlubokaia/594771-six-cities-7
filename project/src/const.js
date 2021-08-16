const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  ROOT: '/',
};

const OfferType = {
  APARTMENT: 'Apartment',
  ROOM: 'Private Room',
  HOUSE: 'House',
  HOTEL: 'Hotel',
};

const getFavoritesItems = function (offers) {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return favoriteOffers;
};


const getRating = function (count) {
  return Math.round(count) * 20;
};

const getPluralDesc = function (count) {
  return count > 1 ? 's' : '';
};

const city = {
  location: {
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 8,
  },
  cityName: 'Amsterdam',
};

export { city, AppRoute, OfferType, getFavoritesItems, getRating, getPluralDesc };
