import { ActionCreator } from './action';
import { APIRoute } from '../const';
import { offersAdapter, userInfoAdapter } from '../services/adapter-api';

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => {
      const adaptedData = offersAdapter(data);
      dispatch(ActionCreator.loadOffers(adaptedData));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({ data }) => {
      dispatch(ActionCreator.login(userInfoAdapter(data)));
    })
    .catch(() => { })
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => {
      console.log(data);
      localStorage.setItem('token', data.token);
    })
    .then(({ data }) => {
      dispatch(ActionCreator.login(userInfoAdapter(data)));
    })
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export { fetchOffers, checkAuth, login, logout };
