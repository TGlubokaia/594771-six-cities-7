import { loadOffers, requireAuthorization, signin, signout, redirectedToRoute } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import {offersAdapter, userInfoAdapter} from '../services/adapter-api';

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => {
      const adaptedData = offersAdapter(data);
      dispatch(loadOffers(adaptedData));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      const adaptedUserInfo = userInfoAdapter(data);
      dispatch(signin(adaptedUserInfo));
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
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      const adaptedUserInfo = userInfoAdapter(data);
      dispatch(signin(adaptedUserInfo));
      dispatch(redirectedToRoute(AppRoute.ROOT));
    })
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(signout()))
);

export {fetchOffers, checkAuth, login, logout};
