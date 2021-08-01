import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../common/prop-types/offer.prop';
import FavoritesCityItem from '../favorites-city-item/favorites-city-item';

const getUniqueCitiesNames = function (offers) {
  const uniqueNames = new Set(offers.map((offer) => offer.city.cityName));
  return [...uniqueNames];
};

const getOffersByCity = function (city, offers) {
  const cityOffers = offers.filter((offer) => offer.city.cityName === city);
  return cityOffers;
};

function FavoritesCitiesList(props) {
  const { offers } = props;

  const uniqueCitiesNames = getUniqueCitiesNames(offers);

  return (
    <ul className="favorites__list">
      {uniqueCitiesNames.map((city) => {
        const offersByCity = getOffersByCity(city, offers);

        return <FavoritesCityItem key={city} city={city} offers={offersByCity} />;
      })}
    </ul>
  );
}

FavoritesCitiesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
};

export default FavoritesCitiesList;
