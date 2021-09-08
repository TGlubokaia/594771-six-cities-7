import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import offerProp from '../../common/prop-types/offer.prop';
import reviewProp from '../../common/prop-types/review.prop';
import { Fragment } from 'react';
import Logo from '../logo/logo';
import RoomReviewsList from '../room-reviews-list/room-reviews-list';
import RoomCommentForm from '../room-comment-form/room-comment-form';
import { getRating, getPluralDesc, city, RoomScreenClasses, getNearestPoints, getNearestOffers } from '../../const';
import Map from '../map/map';
import pointProp from '../../common/prop-types/point.prop';
import OfferItemsList from '../offer-items-list/offer-items-list';

function RoomScreen(props) {
  const { offers, reviews, points } = props;
  const params = useParams();
  const offerItem = offers.find((offer) => offer.id === params.id);
  const { type, goods, bedrooms, maxAdults, title, desc, price, rating, host, isPremium, isFavorite, images, location } = offerItem;


  const nearestPoints = getNearestPoints(points);
  const allPoints = [...nearestPoints];
  allPoints.push(location);

  const nearestOffers = getNearestOffers(nearestPoints, offers);

  return (
    <Fragment>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol viewBox="0 0 7 4">
            <path d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol>
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol>
            <path d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
          </symbol>
        </svg>
      </div>

      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>)}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className={`property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${getRating(rating)}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedroom{getPluralDesc(bedrooms)}
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adult{getPluralDesc(maxAdults)}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.hostAvatar} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.hostName}
                    </span>
                    {host.isPro && (
                      <span className="property__user-status">
                        Pro
                      </span>)}
                  </div>
                  <div className="property__description">
                    {desc && (
                      <p className="property__text">
                        {desc}
                      </p>)}
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <RoomReviewsList reviews={reviews} />
                  <RoomCommentForm />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map city={city} points={allPoints} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OfferItemsList offers={nearestOffers} classes={RoomScreenClasses}/>
            </section>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

RoomScreen.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
  reviews: PropTypes.arrayOf(reviewProp),
  points: PropTypes.arrayOf(pointProp),
};

export default RoomScreen;
