import { user } from './user';
import { ActionType } from '../action';
import { AuthorizationStatus } from '../../const';


describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      authorizationInfo: null,
    };

    expect(user(undefined, {}))
      .toEqual(state);
  });

  it('should update auth status to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };
    const updateStatustoAuthAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, updateStatustoAuthAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});

  });

  it('should update auth status to "NO_AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
    };
    const updateStatustoAuthAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, updateStatustoAuthAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH});
  });

  it('should update auth info', () => {
    const state = {
      authorizationInfo: null,
    };
    const authInfo = {
      avatarUrl: 'avatar_url',
      email: 'email',
      id: 'id',
      isPro: true,
      userName: 'name',
      token: 'token',
    };
    const loginAction = {
      type: ActionType.LOGIN,
      payload: authInfo,
    };

    expect(user(state, loginAction))
      .toEqual({authorizationInfo: authInfo});
  });

  it('should update auth status to "NO_AUTH" and delete auth info', () => {
    const authInfo = {
      avatarUrl: 'avatar_url',
      email: 'email',
      id: 'id',
      isPro: true,
      userName: 'name',
      token: 'token',
    };
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      authorizationInfo: authInfo,
    };
    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(state, logoutAction))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, authorizationInfo: null});
  });


});
