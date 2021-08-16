import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainOfferItem from '../main-offer-item/main-offer-item';
import offerProp from '../../common/prop-types/offer.prop';

function MainOfferItemsList(props) {
  const { offers } = props;
  const [offerOnFocus, setOfferOnFocus] = useState('');

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <MainOfferItem
          key={offer.id}
          offer={offer}
          onOfferFocus={() => {
            setOfferOnFocus(offer.id);
          }}
        />))}
      <span>{offerOnFocus}</span>
    </div>);
}

MainOfferItemsList.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
};

export default MainOfferItemsList;
