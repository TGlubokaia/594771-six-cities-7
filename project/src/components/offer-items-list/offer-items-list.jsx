import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OfferItem from '../offer-item/offer-item';
import offerProp from '../../common/prop-types/offer.prop';
import classesProp from '../../common/prop-types/classes.prop';

function OfferItemsList(props) {
  const { renderedOffers, classes} = props;
  const [offerOnFocus, setOfferOnFocus] = useState('');

  return (
    <div className={`${classes.LIST} places__list ${classes.ADD}`}>
      {renderedOffers.map((offer) => (
        <OfferItem
          key={offer.id}
          offer={offer}
          onOfferFocus={() => {
            setOfferOnFocus(offer.id)
          }}
          classes={classes}
        />))}
    </div>);
}

OfferItemsList.propTypes = {
  renderedOffers: PropTypes.arrayOf(offerProp),
  classes: classesProp,
};

const mapStateToProps = (state) => ({
  renderedOffers: state.renderedOffers,
})


export {OfferItemsList};
export default connect(mapStateToProps, null)(OfferItemsList);
