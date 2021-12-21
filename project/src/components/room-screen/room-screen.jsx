import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { getRating, getPluralDesc, RoomScreenClasses, getAllMapPoints, AppRoute, AuthorizationStatus } from '../../const';
import { offerAdapter, getAdaptedComments, getAdaptedOffersNearby } from '../../services/adapter-api';
import { fetchOfferData } from '../../services/api-utils';
import Header from '../header/header';
import RoomReviewsList from '../room-reviews-list/room-reviews-list';
import RoomCommentForm from '../room-comment-form/room-comment-form';
import Map from '../map/map';
import OfferItemsList from '../offer-items-list/offer-items-list';

function RoomScreen(props) {
  const { authorizationStatus } = props;

  const params = useParams();
  const offerId = params.id;

  const [offer, setOffer] = useState({});
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [offersNearby, setOffersNearby] = useState([]);
  const [points, setPoints] = useState([]);

  const handleFormSubmit = async () => {
    const updatedComments = await getAdaptedComments(offerId);
    setComments(updatedComments);
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchAllOfferData = async (response) => {
      const adaptedComments = await getAdaptedComments(offerId);
      const adaptedOffersNearby = await getAdaptedOffersNearby(offerId);
      const adaptedOfferData = offerAdapter(response.data);
      const allMapPoints = getAllMapPoints(adaptedOfferData, adaptedOffersNearby);

      setOffer(adaptedOfferData);
      setComments(adaptedComments);
      setOffersNearby(adaptedOffersNearby);
      setPoints(allMapPoints);
    };

    const fetchData = async () => {
      try {
        const result = await fetchOfferData(offerId);
        if (result.status === 200) {
          await fetchAllOfferData(result);
          setIsLoading(false);
        }
      } catch {
        browserHistory.push(AppRoute.NOT_FOUND);
      }
    };
    fetchData();

  }, [offerId]);

  const { type, goods, bedrooms, maxAdults, title, desc, price, rating, host, isPremium, isFavorite, images } = offer;
  const city = offer.city;

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
        {(isLoading || isLoading === null)
          ? <div>still loading...</div>
          :
          <main className="page__main page__main--property">
            {}
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {images.slice(0, 6).map((image) => (
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
                    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                    <RoomReviewsList reviews={comments} />
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

RoomScreen.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export { RoomScreen };
export default connect(mapStateToProps, null)(RoomScreen);
