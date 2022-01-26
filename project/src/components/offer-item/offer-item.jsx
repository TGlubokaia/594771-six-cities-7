import React from 'react';
import {Link} from 'react-router-dom';
import {getRating} from '../../const.js';
import PropTypes from 'prop-types';
import offerProp from '../../common/prop-types/offer.prop';
import classesProp from '../../common/prop-types/classes.prop';
import FavoriteButton from '../favorite-button/favorite-button.jsx';
import { FavoriteButtonClasses, buttonSize } from '../../const.js';

function OfferItem(props) {
  const { offer, classes, onActiveOffer } = props;
  const { type, price, title, rating, previewImage, isPremium, isFavorite, id } = offer;

  const handleActiveOfferChange = () => {
    onActiveOffer(offer);
  };

  return (
    <article className={`${classes.ITEM} place-card`}
      onMouseEnter={onActiveOffer ? handleActiveOfferChange : undefined}
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
          <FavoriteButton buttonClass={FavoriteButtonClasses.ITEM} isFavorite={isFavorite} id={id} size={buttonSize.ITEM}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
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
  onActiveOffer: PropTypes.func,
};

export default OfferItem;
