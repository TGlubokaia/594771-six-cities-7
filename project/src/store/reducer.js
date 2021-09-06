import { ActionType } from "./action";

const DEFAULT_CITY = 'AMSTERDAM';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
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
