import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Logo from '../logo/logo';
import {MainScreenClasses} from '../../const';
import FiltersList from '../filter-list/filters-list';
import OfferItemsList from '../offer-items-list/offer-items-list';
import Map from '../map/map';
import offerProp from '../../common/prop-types/offer.prop';
import pointProp from '../../common/prop-types/point.prop';
import { getCityData, getPluralDesc  } from '../../const';
import SortList from '../sort-list/sort-list';
import {ActionCreator} from '../../store/action';


function MainScreen(props) {
  const {renderedOffers, selectedCity} = props;

  const [activeOffer, setActiveOffer] = useState(null);
  const onActiveOffer = (offer) => setActiveOffer(offer.location);

  const points = renderedOffers.map((offer) => offer.location);
  const city = getCityData(selectedCity);

  return (
    <React.Fragment>
      <div style={{display: 'none'}}>
        <svg xmlns={'http://www.w3.org/2000/svg'}><symbol id={'icon-arrow-select'} viewBox={'0 0 7 4'}><path fillRule={'evenodd'} clipRule={'evenodd'} d={'M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z'}></path></symbol><symbol id={'icon-bookmark'} viewBox={'0 0 17 18'}><path d={'M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z'}></path></symbol><symbol id={'icon-star'} viewBox={'0 0 13 12'}><path fillRule={'evenodd'} clipRule={'evenodd'} d={'M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z'}></path></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <FiltersList />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{renderedOffers.length} place{getPluralDesc(renderedOffers.length)} to stay in Amsterdam</b>
                <SortList />
                <OfferItemsList offers={renderedOffers} classes={MainScreenClasses} onActiveOffer={onActiveOffer}/>
              </section>
              <div className="cities__right-section">
                <Map city={city} points={points} pointOnFocus={activeOffer}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

MainScreen.propTypes = {
  renderedOffers: PropTypes.arrayOf(offerProp),
  selectedCity: PropTypes.string.isRequired,
  onOfferFocus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  renderedOffers: state.renderedOffers,
  selectedCity: state.selectedCity,
})

export {MainScreen};
export default connect(mapStateToProps, null)(MainScreen);