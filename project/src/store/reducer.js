import {ActionType} from './action';
import offers from '../mocks/offers';
import { getFilteredOffers } from '../utils/utils';

const DEFAULT_CITY = 'Paris';
const DEFAULT_OFFERS = getFilteredOffers(offers, DEFAULT_CITY);


const initialState = {
  selectedCity: DEFAULT_CITY,
  renderedOffers: DEFAULT_OFFERS,
  offerOnFocus: {},
};

const reducer = (state = initialState, action) => {
const filteredOffers = getFilteredOffers(offers, action.payload);

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      console.log(filteredOffers);
      return {
        ...state,
        selectedCity: action.payload,
        renderedOffers: filteredOffers,
      };
    case ActionType.FILL_OFFERS_LIST:
      return {
        ...state,
        filteredOffers: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
