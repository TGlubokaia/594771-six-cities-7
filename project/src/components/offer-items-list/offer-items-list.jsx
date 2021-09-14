import React from 'react';
import PropTypes from 'prop-types';
import OfferItem from '../offer-item/offer-item';
import offerProp from '../../common/prop-types/offer.prop';
import classesProp from '../../common/prop-types/classes.prop';

function OfferItemsList(props) {
  const { offers, classes, onActiveOffer} = props;

  return (
    <div className={`${classes.LIST} places__list ${classes.ADD}`}>
      {offers.map((offer) => (
        <OfferItem
          key={offer.id}
          offer={offer}
          onActiveOffer={onActiveOffer}
          classes={classes}
        />))}
    </div>);
}

OfferItemsList.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
  classes: classesProp,
  onActiveOffer: PropTypes.func.isRequired,
};

export default OfferItemsList;
