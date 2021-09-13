import {ActionType} from './action';
import offers from '../mocks/offers';
import { getFilteredOffers } from '../utils/filter';
// import { getSortedOffers } from '../utils/sort';
import { sortTypeNames } from '../const';

const DEFAULT_CITY = 'Paris';
const DEFAULT_OFFERS = getFilteredOffers(offers, DEFAULT_CITY);
const DEFAULT_SORT_TYPE = sortTypeNames.DEFAULT;

const initialState = {
  selectedCity: DEFAULT_CITY,
  renderedOffers: DEFAULT_OFFERS,
  offerOnFocus: {},
  sortType: DEFAULT_SORT_TYPE,
};

const reducer = (state = initialState, action) => {
const filteredOffers = getFilteredOffers(offers, action.payload);

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload,
        renderedOffers: filteredOffers,
      };
    case ActionType.SORT_OFFERS_LIST:
      return {
        ...state,
        sortType: action.payload,
        // renderedOffers: getSortedOffers(renderedOffers, action.payload),
        renderedOffers: offers,
      };
    default:
      return state;
  }
};

export {reducer};
