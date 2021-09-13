const getFilteredOffers = function (offers, city) {
  const filteredOffers = offers.filter((offer) => offer.city.cityName === city);
  return filteredOffers;
};

export {getFilteredOffers};
