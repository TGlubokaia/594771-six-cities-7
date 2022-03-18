import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { ActionType } from './action';
import { fetchOffers, checkAuth, login, logout } from './api-actions';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => { });
  });

  /*   it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [{ fake: true }]);

    return fetchOffersLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_OFFERS,
          payload: [{ fake: true }],
        });
      });
  }); */

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOGIN,
          payload: [{ fake: true }],
        });
      });
  });
  /*   it('should make a correct API call to POST /login', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const loginLoader = login();

      apiMock
        .onPost(APIRoute.LOGIN)
        .reply(200, [{ fake: true }]);
    });

    it('should make a correct API call to DELETE /logout', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const logoutLoader = logout();
    }); */
});
