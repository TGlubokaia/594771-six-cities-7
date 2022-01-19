const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  ROOT: '/',
  NOT_FOUND: '/not_found',
};

const MainScreenClasses = {
  LIST: 'cities__places-list',
  ITEM: 'cities__place-card',
  ADD: 'tabs__content',
  WRAPPER: 'cities',
};

const RoomScreenClasses = {
  LIST: 'near-places__list',
  ITEM: 'near-places__card',
  ADD: '',
  WRAPPER: 'near-places',
};

const OfferType = {
  APARTMENT: 'Apartment',
  ROOM: 'Private Room',
  HOUSE: 'House',
  HOTEL: 'Hotel',
};

const getFavoritesItems = (offers) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return favoriteOffers;
};

const getRating = (count) => Math.round(count) * 20;

const getPluralDesc = (count) => count > 1 || count === 0 ? 's' : '';

const getAllMapPoints = (currentOffer, offersNearby) => {
  const allPoints = [];
  const allOffers = offersNearby.slice(0, 3);
  allOffers.push(currentOffer);
  for (let i = 0; i < allOffers.length; i++) {
    allPoints.push(allOffers[i].location);
  }
  return allPoints;
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  FAVORITES: '/favorite',
  OFFER: (id) => `/hotels/${id}`,
  OFFERS_NEARBY: (id) => `/hotels/${id}/nearby`,
  OFFER_COMMENTS: (id) => `/comments/${id}`,
};

export { AppRoute, OfferType, getFavoritesItems, getRating, getPluralDesc, MainScreenClasses, RoomScreenClasses, getAllMapPoints, AuthorizationStatus, APIRoute };
