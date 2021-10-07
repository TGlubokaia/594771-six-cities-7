const ActionType = {
  CHANGE_CITY: 'main/changeCities',
  SORT_OFFERS_LIST: 'offers/sortOffers',
  LOAD_OFFERS: 'offers/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
  REDIRECTED_TO_ROUTE: 'app/redirectedToRoute',
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  sortOffers: (type) => ({
    type: ActionType.SORT_OFFERS_LIST,
    payload: type,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  login: (authInfo) => ({
    type: ActionType.LOGIN,
    payload: authInfo,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectedToRoute: (url) => ({
    type: ActionType.REDIRECTED_TO_ROUTE,
    payload: url,
  }),
};

export {ActionType, ActionCreator};
