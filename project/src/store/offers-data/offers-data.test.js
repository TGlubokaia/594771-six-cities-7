import { offersData } from './offers-data';
import { ActionType } from '../action';

const offers = [{
  id: 'id',
  type: 'type',
  city: {
    location: {
      latitude: 123,
      longitude: 123,
      zoom: 12,
    },
    cityName: 'name',
  },
  goods: [],
  bedrooms: 1,
  maxAdults: 1,
  title: 'title',
  desc: 'description',
  price: 123,
  previewImage: 'image',
  images: [],
  rating: 1,
  host: {
    hostAvatar: 'url',
    id: 'id',
    hostName: 'name',
    isPro: true,
  },
  location: {
    latitude: 123,
    longitude: 123,
    zoom: 12,
  },
  isPremium: true,
  isFavorite: true,
}, {
  id: 'id',
  type: 'type',
  city: {
    location: {
      latitude: 123,
      longitude: 123,
      zoom: 12,
    },
    cityName: 'name',
  },
  goods: [],
  bedrooms: 1,
  maxAdults: 1,
  title: 'title',
  desc: 'description',
  price: 123,
  previewImage: 'image',
  images: [],
  rating: 1,
  host: {
    hostAvatar: 'url',
    id: 'id',
    hostName: 'name',
    isPro: true,
  },
  location: {
    latitude: 123,
    longitude: 123,
    zoom: 12,
  },
  isPremium: true,
  isFavorite: true,
},
];

describe('Reducer: offers` data', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersData(undefined, {}))
      .toEqual({ initialOffers: [], isDataLoaded: false });
  });

  it('should load offers', () => {
    const state = {
      initialOffers: [],
      isDataLoaded: false,
    };

    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(offersData(state, loadOffersAction))
      .toEqual({ initialOffers: offers, isDataLoaded: true });

    const nonLoadOffersAction = {
      type: 'ActionType',
      payload: null,
    };

    expect(offersData(state, nonLoadOffersAction))
      .toEqual({ initialOffers: [], isDataLoaded: false });

  });
});
