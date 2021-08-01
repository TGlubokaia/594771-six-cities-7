import React from 'react';
import PropTypes from 'prop-types';
import offerProp from '../../common/prop-types/offer.prop';
import FavoritesCityOfferItem from '../favorites-city-offer-item/favorites-city-offer-item';

function FavoritesCityItem(props) {
  const { city, offers } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoritesCityOfferItem key={offer.id} offer={offer}/>)}
      </div>
    </li>
  );
}

FavoritesCityItem.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerProp),
};

export default FavoritesCityItem;
