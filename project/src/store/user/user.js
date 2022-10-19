import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { requireAuthorization, signin, signout } from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationInfo: null,
};


const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(signin, (state, action) => {
      state.authorizationInfo = action.payload;
    })
    .addCase(signout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      state.authorizationInfo = null;
    });
});


export { user };
