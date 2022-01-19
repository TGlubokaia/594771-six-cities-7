const getSortedOffers = (initialOffers, offers, sortType) => {
  switch (sortType) {
    case SortTypeNames.PRICE_LOW_TO_HIGH:
      return [...offers.sort((prevOffer, nextOffer) => prevOffer.price - nextOffer.price)];

    case SortTypeNames.PRICE_HIGH_TO_LOW:
      return [...offers.sort((prevOffer, nextOffer) => nextOffer.price - prevOffer.price)];

    case SortTypeNames.TOP_RATED:
      return [...offers.sort((prevOffer, nextOffer) => nextOffer.rating - prevOffer.rating)];

    default:
      return initialOffers;
  }
};

const SortTypeNames = {
  DEFAULT: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export {getSortedOffers, SortTypeNames};
