import React from 'react';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user/selectors';
import { getLoadedDataStatus } from '../../store/offers-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isDataLoaded) {
    return (
      <BrowserRouter history={browserHistory}>
        <LoadingScreen />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesScreen />}
          redirectPath={AppRoute.LOGIN}
          authorizationStatus={authorizationStatus}
          authStatusRequired={AuthorizationStatus.AUTH}
        />
        <Route path={AppRoute.ROOM}>
          <RoomScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.LOGIN}
          render={() => <SignInScreen />}
          redirectPath={AppRoute.ROOT}
          authorizationStatus={authorizationStatus}
          authStatusRequired={AuthorizationStatus.NO_AUTH}
        />
        <Route exact path={AppRoute.NOT_FOUND}>
          <NotFoundScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
