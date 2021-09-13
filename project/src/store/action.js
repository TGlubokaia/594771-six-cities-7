import { getFilteredOffers } from "../utils/filter";

const ActionType = {
  CHANGE_CITY: 'main/changeCities',
  SORT_OFFERS_LIST: 'offers/sortOffersList',
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  sortOffers: (type) => ({
    type: ActionType.SORT_OFFERS_LIST,
    payload: type,
  })
}

export {ActionType, ActionCreator};
