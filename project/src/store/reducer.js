import { ActionType } from './action';
// import offers from '../mocks/offers';
import { getFilteredOffers } from '../utils/filter';
import { getSortedOffers } from '../utils/sort';
import { sortTypeNames, AuthorizationStatus } from '../const';

const DEFAULT_CITY = 'Paris';
const DEFAULT_SORT_TYPE = sortTypeNames.DEFAULT;

const initialState = {
  selectedCity: DEFAULT_CITY,
  renderedOffers: [],
  pointOnFocus: {},
  sortType: DEFAULT_SORT_TYPE,
  initialOffers: [],
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {

  const filteredOffers = getFilteredOffers(state.initialOffers, action.payload);
  const sortedOffers = getSortedOffers(state.renderedOffers, action.payload);

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload,
        renderedOffers: filteredOffers,
        sortType: DEFAULT_SORT_TYPE,
      };
    case ActionType.SORT_OFFERS_LIST:
      return {
        ...state,
        sortType: action.payload,
        renderedOffers: sortedOffers,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        initialOffers: action.payload,
        renderedOffers: action.payload, //getFilteredOffers(action.payload, DEFAULT_CITY)
        isDataLoaded: true,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export { reducer };
