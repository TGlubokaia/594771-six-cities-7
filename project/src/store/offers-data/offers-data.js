import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, loadFavoriteOffers } from '../action';

const initialState = {
  initialOffers: [],
  isDataLoaded: false,
  favoriteOffers: [],
};


const offersData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.initialOffers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});

export { offersData };
