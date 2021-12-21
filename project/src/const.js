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

const DEFAULT_ZOOM = 12;

const cities = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: DEFAULT_ZOOM,
    },
    cityName: 'Paris',
  },
  {
    location: {
      latitude: 50.936389,
      longitude: 6.952778,
      zoom: DEFAULT_ZOOM,
    },
    cityName: 'Cologne',
  },
  {
    location: {
      latitude: 50.8398,
      longitude: 4.3526,
      zoom: DEFAULT_ZOOM,
    },
    cityName: 'Brussels',
  },
  {

    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: DEFAULT_ZOOM,
    },
    cityName: 'Amsterdam',
  },
  {

    location: {
      latitude: 53.5436,
      longitude: 10,
      zoom: DEFAULT_ZOOM,
    },
    cityName: 'Hamburg',
  },
  {

    location: {
      latitude: 51.2243,
      longitude: 6.7724,
      zoom: DEFAULT_ZOOM,
    },
    cityName: 'Dusseldorf',
  },
];

const SortTypeNames = {
  DEFAULT: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

const getFavoritesItems = function (offers) {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  return favoriteOffers;
};

const getRating = function (count) {
  return Math.round(count) * 20;
};

const getPluralDesc = function (count) {
  return count > 1 || count === 0 ? 's' : '';
};

const getAllMapPoints = function (currentOffer, offersNearby) {
  const allOffers = offersNearby.slice(0, 3);
  allOffers.push(currentOffer);
  const allPoints = [];
  for (let i = 0; i < allOffers.length; i++) {
    allPoints.push(allOffers[i].location);
  }
  return allPoints;
};

const getCityData = function (selectedCity) {
  const cityData = cities.find((city) => city.cityName === selectedCity);
  return cityData;
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

export { AppRoute, OfferType, getFavoritesItems, getRating, getPluralDesc, SortTypeNames, MainScreenClasses, RoomScreenClasses, getAllMapPoints, getCityData, cities, AuthorizationStatus, APIRoute };
