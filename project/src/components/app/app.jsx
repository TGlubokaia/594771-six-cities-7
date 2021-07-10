import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const.js';


function App(props) {
  const { aptCount } = props;
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            aptCount={aptCount}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomScreen />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  aptCount: PropTypes.number.isRequired,
};

export default App;
