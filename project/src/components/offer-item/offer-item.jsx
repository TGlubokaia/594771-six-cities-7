import React from 'react';
import {Link} from 'react-router-dom';
import {getRating} from '../../const.js';
import PropTypes from 'prop-types';
import offerProp from '../../common/prop-types/offer.prop';
import classesProp from '../../common/prop-types/classes.prop';

function OfferItem(props) {
  const { offer, classes, onActiveOffer } = props;
  const { type, price, title, rating, previewImage, isPremium, isFavorite } = offer;

  const handleAcctiveOfferChange = () => {
    onActiveOffer(offer);
  }

  return (
    <article className={`${classes.ITEM} place-card`}
      onMouseEnter={onActiveOffer ? handleAcctiveOfferChange : undefined}
    >

      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${classes.WRAPPER}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>
            {title}
          </Link>
          <a href="#"></a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

OfferItem.propTypes = {
  offer: offerProp,
  classes: classesProp,
};

export default OfferItem;
