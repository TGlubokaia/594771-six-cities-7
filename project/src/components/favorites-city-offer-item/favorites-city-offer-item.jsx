import React from 'react';
import offerProp from '../../common/prop-types/offer.prop';
import { Link } from 'react-router-dom';
import { getRating, FavoriteButtonClasses, buttonSize } from '../../const.js';
import FavoriteButton from '../favorite-button/favorite-button';

function FavoritesCityOfferItem(props) {
  const { offer } = props;
  const { price, rating, type, previewImage, title, id, isFavorite } = offer;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
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
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

FavoritesCityOfferItem.propTypes = {
  offer: offerProp,
};

export default FavoritesCityOfferItem;
