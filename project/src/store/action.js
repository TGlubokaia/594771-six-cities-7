import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  CHANGE_CITY: 'main/changeCities',
  SORT_OFFERS_LIST: 'offers/sortOffers',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_FAVORITES: 'offers/loadFavorites',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  REDIRECTED_TO_ROUTE: 'app/redirectedToRoute',
};

const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

const sortOffers = createAction(ActionType.SORT_OFFERS_LIST, (type) => ({
  payload: type,
}));

const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));

const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITES, (offers) => ({
  payload: offers,
}));

const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION,(status) => ({
  payload: status,
}));

const signin = createAction(ActionType.LOGIN, (authInfo) => ({
  payload: authInfo,
}));

const signout = createAction(ActionType.LOGOUT);

const redirectedToRoute = createAction(ActionType.REDIRECTED_TO_ROUTE, (url) => ({
  payload: url,
}));

export { ActionType, changeCity, sortOffers, loadOffers, loadFavoriteOffers, requireAuthorization, signin, signout, redirectedToRoute };
