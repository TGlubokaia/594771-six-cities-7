import { ActionType, changeCity, sortOffers, loadOffers, requireAuthorization, signin, signout, redirectedToRoute } from './action';

describe('Action', () => {
  it('action creator for changing city returns correct action', () => {
    const city = 'city';

    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };

    expect(changeCity(city)).toEqual(expectedAction);
  });

  it('action creator for offers sort returns correct action', () => {
    const sortType = 'sortType';

    const expectedAction = {
      type: ActionType.SORT_OFFERS_LIST,
      payload: sortType,
    };

    expect(sortOffers(sortType)).toEqual(expectedAction);
  });

  it('action creator for loading offers returns correct action', () => {
    const offers = [];

    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for changing auth status returns correct action', () => {
    const status = 'status';

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('action creator for signing in returns correct action', () => {
    const userInfo = {
      avatarUrl: 'img',
      email: 'email',
      id: 1,
      isPro: false,
      userName: 'ttt',
      token: '111',
    };

    const expectedAction = {
      type: ActionType.LOGIN,
      payload: userInfo,
    };


    expect(signin(userInfo)).toEqual(expectedAction);
  });

  it('action creator for signing out returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(signout()).toEqual(expectedAction);
  });

  it('action creator for redirecting returns correct action', () => {
    const url = 'url';

    const expectedAction = {
      type: ActionType.REDIRECTED_TO_ROUTE,
      payload: url,
    };

    expect(redirectedToRoute(url)).toEqual(expectedAction);
  });
});
