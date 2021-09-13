const getSortedOffers = function (offers, sortType) {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((prevOffer, nextOffer) => prevOffer.price - nextOffer.price);

    case SortType.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((prevOffer, nextOffer) => nextOffer.price - prevOffer.price);

    case SortType.TOP_RATED:
      return offers.slice().sort((prevOffer, nextOffer) => nextOffer.rating - prevOffer.rating);

    default:
      return offers;
  }
  
};

export {getSortedOffers};
