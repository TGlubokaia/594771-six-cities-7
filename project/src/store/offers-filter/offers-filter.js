import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from '../action';

const DEFAULT_CITY = 'Paris';


const initialState = {
  selectedCity: DEFAULT_CITY,
};

const offersFilter = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.selectedCity= action.payload;
    });
});

export { offersFilter };
