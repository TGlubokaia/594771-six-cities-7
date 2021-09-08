import { ActionType } from "./action";

const DEFAULT_CITY = 'AMSTERDAM';

const initialState = {
  selectedCity: DEFAULT_CITY,
  offers: [],
  offerOnFocus: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
