import {sortTypeNames} from '../const';

const getSortedOffers = function (initialOffers, offers, sortType) {
  switch (sortType) {
    case sortTypeNames.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((prevOffer, nextOffer) => prevOffer.price - nextOffer.price);

    case sortTypeNames.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((prevOffer, nextOffer) => nextOffer.price - prevOffer.price);

    case sortTypeNames.TOP_RATED:
      return offers.slice().sort((prevOffer, nextOffer) => nextOffer.rating - prevOffer.rating);

    default:
      return initialOffers;
  }
};

export {getSortedOffers};
