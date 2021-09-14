import { ActionType } from './action';
import offers from '../mocks/offers';
import { getFilteredOffers } from '../utils/filter';
import { getSortedOffers } from '../utils/sort';
import { sortTypeNames } from '../const';

const DEFAULT_CITY = 'Paris';
const DEFAULT_OFFERS = getFilteredOffers(offers, DEFAULT_CITY);
const DEFAULT_SORT_TYPE = sortTypeNames.DEFAULT;

const initialState = {
  selectedCity: DEFAULT_CITY,
  renderedOffers: DEFAULT_OFFERS,
  pointOnFocus: {},
  sortType: DEFAULT_SORT_TYPE,
  initialOffers: [],
};

const reducer = (state = initialState, action) => {

  const filteredOffers = getFilteredOffers(offers, action.payload);
  const sortedOffers = getSortedOffers(state.initialOffers, state.renderedOffers, action.payload);

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload,
        renderedOffers: filteredOffers,
        initialOffers: filteredOffers,
        sortType: initialState.sortType,
      };
    case ActionType.SORT_OFFERS_LIST:
      return {
        ...state,
        sortType: action.payload,
        renderedOffers: sortedOffers,
      };
    default:
      return state;
  }
};

export { reducer };
