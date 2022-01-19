import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MainScreenClasses, getPluralDesc } from '../../const';
import { getFilteredOffers } from '../../utils/filter';
import { getSortedOffers, SortTypeNames } from '../../utils/sort';
import {getCityData} from '../../utils/offer';
import Header from '../header/header';
import EmptyList from '../empty-list/empty-list';
import FiltersList from '../filter-list/filters-list';
import OfferItemsList from '../offer-items-list/offer-items-list';
import SortList from '../sort-list/sort-list';
import Map from '../map/map';
import offerProp from '../../common/prop-types/offer.prop';

const DEFAULT_SORT_TYPE = SortTypeNames.DEFAULT;

function MainScreen(props) {
  const { initialOffers, selectedCity } = props;

  const filteredOffers = getFilteredOffers(initialOffers, selectedCity);

  const [activeOffer, setActiveOffer] = useState(null);
  const [offers, setOffers] = useState(filteredOffers);
  const [sortType, setSortType] = useState(DEFAULT_SORT_TYPE);

  const onActiveOffer = (offer) => setActiveOffer(offer.location);
  const onActiveSortType = (sort) => setSortType(sort);

  useEffect(() => {
    const sortedOffers = getSortedOffers(filteredOffers, offers, sortType);
    setOffers(sortedOffers);
  }, [sortType]);

  useEffect(() => {
    setSortType(DEFAULT_SORT_TYPE);
    setOffers(filteredOffers);
  }, [selectedCity]);

  const points = offers.map((offer) => offer.location);
  const city = getCityData(selectedCity);

  return (
    <React.Fragment>
      <div style={{ display: 'none' }}>
        <svg xmlns={'http://www.w3.org/2000/svg'}><symbol id={'icon-arrow-select'} viewBox={'0 0 7 4'}><path fillRule={'evenodd'} clipRule={'evenodd'} d={'M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z'}></path></symbol><symbol id={'icon-bookmark'} viewBox={'0 0 17 18'}><path d={'M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z'}></path></symbol><symbol id={'icon-star'} viewBox={'0 0 13 12'}><path fillRule={'evenodd'} clipRule={'evenodd'} d={'M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z'}></path></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <FiltersList />
          </div>
          {!offers
            ? <EmptyList />
            :
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} place{getPluralDesc(offers.length)} to stay in {selectedCity}</b>
                  <SortList onSortType={onActiveSortType} sortType={sortType} />
                  <OfferItemsList offers={offers} classes={MainScreenClasses} onActiveOffer={onActiveOffer} />
                </section>
                <div className="cities__right-section">
                  <Map city={city} points={points} pointOnFocus={activeOffer} />
                </div>
              </div>
            </div>}
        </main>
      </div>
    </React.Fragment>
  );
}

MainScreen.propTypes = {
  initialOffers: PropTypes.arrayOf(offerProp),
  selectedCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  initialOffers: state.initialOffers,
  selectedCity: state.selectedCity,
});

export { MainScreen };
export default connect(mapStateToProps, null)(MainScreen);
