import React from 'react';
import { Fragment } from 'react';
import useFavorites from '../../hooks/useFavorites';
import LogoFooter from '../logo/logo-footer';
import FavoritesCitiesList from '../favorites-cities-list/favorites-cities-list';
import FavoritesEmptyList from '../favorites-empty-list/favorites-empty-list';
import Header from '../header/header';

function FavoritesScreen() {
  const offers = useFavorites();

  return (
    <Fragment>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol viewBox="0 0 7 4">
            <path d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol viewBox="0 0 13 12">
            <path d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
          </symbol>
        </svg>
      </div>

      <div className="page">
        <Header />
        {!offers.length
          ? <FavoritesEmptyList />
          : <FavoritesCitiesList offers={offers} />}
        <footer className="footer container">
          <LogoFooter />
        </footer>
      </div>
    </Fragment>
  );
}

export default FavoritesScreen;
