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

const getCityData = (selectedCity) => {
  const cityData = cities.find((city) => city.cityName === selectedCity);
  return cityData;
};

const getUniqueCitiesNames = (offers) => {
  const uniqueNames = new Set(offers.map((offer) => offer.city.cityName));
  return [...uniqueNames];
};

const getOffersByCity = (city, offers) => {
  const cityOffers = offers.filter((offer) => offer.city.cityName === city);
  return cityOffers;
};

export {cities, getCityData, getUniqueCitiesNames, getOffersByCity};
