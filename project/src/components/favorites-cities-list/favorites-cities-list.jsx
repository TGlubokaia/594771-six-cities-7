import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../common/prop-types/offer.prop';
import { getUniqueCitiesNames, getOffersByCity } from '../../utils/offer';
import FavoritesCityItem from '../favorites-city-item/favorites-city-item';


function FavoritesCitiesList(props) {
  const { offers } = props;

  return (
    <ul className="favorites__list">
      {offers
        ? getUniqueCitiesNames(offers).map((city) => {
          const offersByCity = getOffersByCity(city, offers);

          return <FavoritesCityItem key={city} city={city} offers={offersByCity} />;
        })
        : ''}
    </ul>
  );
}

FavoritesCitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
};

export default FavoritesCitiesList;
