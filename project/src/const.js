const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
  ROOT: '/',
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
}

const OfferType = {
  APARTMENT: 'Apartment',
  ROOM: 'Private Room',
  HOUSE: 'House',
  HOTEL: 'Hotel',
};

const cities = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
    cityName: 'Paris',
  },
  {
    location: {
      latitude: 50.936389,
      longitude: 6.952778,
      zoom: 10,
    },
    cityName: 'Cologne',
  },
  {
    location: {
      latitude: 50.8398,
      longitude: 4.3526,
    },
    cityName: 'Brussels',
  },
  {

    location: {
      latitude: 52.38333,
      longitude: 4.9,
      zoom: 10,
    },
    cityName: 'Amsterdam',
  },
  {

    location: {
      latitude: 53.5436,
      longitude: 10,
      zoom: 10,
    },
    cityName: 'Hamburg',
  },
  {

    location: {
      latitude: 51.2243,
      longitude: 6.7724,
      zoom: 10,
    },
    cityName: 'Dusseldorf',
  },
];

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
    zoom: 12,
  },
  cityName: 'Amsterdam',
};

const getNearestPoints = function (points) {
  const allNearestPoints = [];
  for (let i = 0; i < 3; i++) {
    allNearestPoints.push(points[i]);
  }
  return allNearestPoints;
};

const getNearestOffers = function (points, offers) {
  let nearestOffers = [];
  for (let point of points) {
    nearestOffers.push(offers.find((offer) => offer.location === point));
  }
  return nearestOffers;
};


export { city, AppRoute, OfferType, getFavoritesItems, getRating, getPluralDesc, MainScreenClasses, RoomScreenClasses, getNearestPoints, getNearestOffers, cities };
