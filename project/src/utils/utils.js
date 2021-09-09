const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

const getFilteredOffers = function (offers, city) {
  const filteredOffers = offers.filter((offer) => offer.city.cityName === city);
  return filteredOffers;
};

export {getRandomIntInclusive, getFilteredOffers};
