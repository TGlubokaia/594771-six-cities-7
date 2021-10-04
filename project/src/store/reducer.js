import { ActionType } from './action';
import {  AuthorizationStatus } from '../const';

const DEFAULT_CITY = 'Paris';

const initialState = {
  selectedCity: DEFAULT_CITY,
  pointOnFocus: {},
  initialOffers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationInfo: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };
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
    case ActionType.LOGIN:
      return {
        ...state,
        authorizationInfo: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: null,
      };
    default:
      return state;
  }
};

export { reducer };
