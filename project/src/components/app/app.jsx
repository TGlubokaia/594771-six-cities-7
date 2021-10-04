import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropTypes from 'prop-types';
import { AppRoute, AuthorizationStatus } from '../../const';
import reviewProp from '../../common/prop-types/review.prop';
import PrivateRoute from '../private-route/private-route';

function App(props) {
  const { reviews, authorizationStatus, isDataLoaded } = props;

  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isDataLoaded) {
    return (
      <BrowserRouter>
        <LoadingScreen />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          authorizationStatus={authorizationStatus}
          authStatusRequired={AuthorizationStatus.AUTH}
          render={() => <FavoritesScreen />}
          redirectPath={AppRoute.LOGIN}
        />
        <Route path={AppRoute.ROOM}>
          <RoomScreen
            reviews={reviews}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.LOGIN}
          authorizationStatus={authorizationStatus}
          authStatusRequired={AuthorizationStatus.NO_AUTH}
          render={() => <SignInScreen />}
          redirectPath={AppRoute.ROOT}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp),
  authorizationStatus: PropTypes.string,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export { App };
export default connect(mapStateToProps, null)(App);
