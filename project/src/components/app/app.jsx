import React from 'react';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import browserHistory from '../../browser-history';
import LoadingScreen from '../loading-screen/loading-screen';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropTypes from 'prop-types';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

function App(props) {
  const { authorizationStatus, isDataLoaded } = props;

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
          <MainScreen onSignInClick={({history}) => (history.push(AppRoute.LOGIN))}/>
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
          <RoomScreen/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.LOGIN}
          render={() => <SignInScreen />}
          redirectPath={AppRoute.ROOT}
          authorizationStatus={authorizationStatus}
          authStatusRequired={AuthorizationStatus.NO_AUTH}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export { App };
export default connect(mapStateToProps, null)(App);
