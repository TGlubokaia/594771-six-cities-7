const ActionType = {
  CHANGE_CITY: 'main/changeCities',
  FILTER_OFFERS_LIST: 'offers/fillterOffersList',
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  filterOffers: (offers) => ({
    type: ActionType.FILTER_OFFERS_LIST,
    payload: offers,
  })
}

export {ActionType, ActionCreator};
