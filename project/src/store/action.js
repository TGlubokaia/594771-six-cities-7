const ActionType = {
  CHANGE_CITY: 'main/changeCities',
  SORT_OFFERS_LIST: 'offers/sortOffers',
  LOAD_OFFERS: 'offers/loadOffers',
  LOGIN: 'user/login',
  LOGOUT: 'user/logout',
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
  login: (authInfo) => ({
    type: ActionType.LOGIN,
    payload: authInfo,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};

export {ActionType, ActionCreator};
