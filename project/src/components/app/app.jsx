import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const.js';
import offerProp from '../../common/prop-types/offer.prop';
import reviewDataProp from '../room-screen/room-screen.prop';
import { getFavoritesItems } from '../../const.js';


function App(props) {
  const { offers, reviews } = props;
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen
            offers={getFavoritesItems(offers)}
          />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <RoomScreen
            offers={offers}
            reviews={reviews}
          />
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
  offers: PropTypes.arrayOf(offerProp),
  reviews: PropTypes.arrayOf(reviewDataProp),
};

export default App;
