import { ActionCreator } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import {offersAdapter, userInfoAdapter} from '../services/adapter-api';

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const adaptedData = offersAdapter(data);
      dispatch(ActionCreator.loadOffers(adaptedData));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      const adaptedUserInfo = userInfoAdapter(data);
      dispatch(ActionCreator.login(adaptedUserInfo));
    })
    .catch(() => { })
);

const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      return data;
    })
    .then((data) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      const adaptedUserInfo = userInfoAdapter(data);
      dispatch(ActionCreator.login(adaptedUserInfo));
      dispatch(ActionCreator.redirectedToRoute(AppRoute.ROOT));
    })
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export {fetchOffers, checkAuth, login, logout};
