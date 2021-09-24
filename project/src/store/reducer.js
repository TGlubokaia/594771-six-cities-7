import { ActionType } from './action';
// import offers from '../mocks/offers';
// import { getFilteredOffers } from '../utils/filter';
// import { getSortedOffers } from '../utils/sort';
import { /*sortTypeNames,*/ AuthorizationStatus } from '../const';
// import { offerAdapter } from '../services/adapter-api';

const DEFAULT_CITY = 'Paris';
// const DEFAULT_SORT_TYPE = sortTypeNames.DEFAULT;

const initialState = {
  selectedCity: DEFAULT_CITY,
  pointOnFocus: {},
  initialOffers: [],
  isDataLoaded: false,
  // sortType: DEFAULT_SORT_TYPE,
  // renderedOffers: [],
};

const reducer = (state = initialState, action) => {

  // const filteredOffers = getFilteredOffers(state.renderedOffers, action.payload);
  // const sortedOffers = getSortedOffers(state.initialOffers, state.renderedOffers, action.payload);
  // const firstRenderedOffers = getFilteredOffers(offerAdapter(action.payload), DEFAULT_CITY);

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload,
        // renderedOffers: filteredOffers,
        // initialOffers: filteredOffers,
        // sortType: DEFAULT_SORT_TYPE,
      };
    // case ActionType.SORT_OFFERS_LIST:
    //   return {
    //     ...state,
    //     sortType: action.payload,
    //     renderedOffers: sortedOffers,
    //   };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        initialOffers: action.payload,
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
