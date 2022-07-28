import React, {useState, Fragment } from 'react';
import { useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRating, getPluralDesc, RoomScreenClasses, AuthorizationStatus, FavoriteButtonClasses, buttonSize } from '../../const';
import { getAdaptedComments } from '../../services/adapter-api';
import { getAuthorizationStatus } from '../../store/user/selectors';
import Header from '../header/header';
import RoomReviewsList from '../room-reviews-list/room-reviews-list';
import RoomCommentForm from '../room-comment-form/room-comment-form';
import FavoriteButton from '../favorite-button/favorite-button';
import Map from '../map/map';
import OfferItemsList from '../offer-items-list/offer-items-list';
import useOfferData from '../../hooks/useOfferData';

function RoomScreen() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const params = useParams();
  const offerId = params.id;

  const [allComments, setAllComments] = useState([]);

  const handleFormSubmit = async () => {
    const updatedComments = await getAdaptedComments(offerId);
    setAllComments(updatedComments);
  };

  const handleComments = (initialComments) => {
    setAllComments(initialComments);
  };

  const offerData = useOfferData(offerId, handleComments);

  const [offer, offersNearby, points] = offerData;
  const { type, goods, bedrooms, maxAdults, title, desc, price, rating, host, isPremium, isFavorite, images, city, id } = offer;

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
        <Header />
        {(!Object.keys(offer).length)
          ? <div>still loading...</div>
          :
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {images.slice(0, 6).map((image) => (
                    <div key={image} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="Photo studio"/>
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
                    <FavoriteButton buttonClass={FavoriteButtonClasses.ROOM} isFavorite={isFavorite} id={id} size={buttonSize.ROOM}/>
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
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{allComments.length}</span></h2>
                    <RoomReviewsList reviews={allComments} />
                    {authorizationStatus === AuthorizationStatus.AUTH && <RoomCommentForm handleFormSubmit={handleFormSubmit} id={offerId} />}
                  </section>
                </div>
              </div>
              <section className="property__map map">
                <Map city={city} points={points} pointOnFocus={offer.location} />
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <OfferItemsList offers={offersNearby} classes={RoomScreenClasses} />
              </section>
            </div>
          </main>}
      </div>
    </Fragment>
  );
}

export default RoomScreen;
