import {SortTypeNames} from '../const';

const getSortedOffers = function (initialOffers, offers, sortType) {
  switch (sortType) {
    case SortTypeNames.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((prevOffer, nextOffer) => prevOffer.price - nextOffer.price);

    case SortTypeNames.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((prevOffer, nextOffer) => nextOffer.price - prevOffer.price);

    case SortTypeNames.TOP_RATED:
      return offers.slice().sort((prevOffer, nextOffer) => nextOffer.rating - prevOffer.rating);

    default:
      return initialOffers;
  }
};

export {getSortedOffers};
