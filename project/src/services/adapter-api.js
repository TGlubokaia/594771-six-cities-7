import { fetchOfferComments, fetchOffersNearby } from '../services/api-utils';
import dayjs from 'dayjs';

const getDate = function (serverDate) {
  const commentDate = dayjs(serverDate).format('MMMM YYYY');
  return commentDate;
};

const offerAdapter = function (offer) {
  return ({
    id: offer.id,
    type: offer.type,
    city: {
      location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom,
      },
      cityName: offer.city.name,
    },
    goods: offer.goods,
    bedrooms: offer.bedrooms,
    maxAdults: offer.maxAdults,
    title: offer.title,
    desc: offer.description,
    price: offer.price,
    previewImage: offer.previewImage,
    images: offer.images,
    rating: offer.rating,
    host: {
      hostAvatar: offer.host.avatarUrl,
      id: offer.host.id,
      hostName: offer.host.name,
      isPro: offer.host.isPro,
    },
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
    isPremium: offer.isPremium,
    isFavorite: offer.isFavorite,
  });
};

const offersAdapter = (serverOffers) => serverOffers.length ? serverOffers.map((offer) => offerAdapter(offer)) : [];

const userInfoAdapter = (serverUserInfo) => ({
  avatarUrl: serverUserInfo.avatarUrl,
  email: serverUserInfo.email,
  id: serverUserInfo.id,
  isPro: serverUserInfo.isPro,
  userName: serverUserInfo.name,
  token: serverUserInfo.token,
});

const commentsAdapter = (serverComments) => serverComments.map((comment) => ({
  id: comment.id,
  rating: comment.rating,
  date: getDate(comment.date),
  comment: comment.comment,
  user: {
    userAvatar: comment.user.avatarUrl,
    id: comment.user,
    isPro: comment.user.isPro,
    userName: comment.user.name,
  },
}));

const getAdaptedComments = async (id) => {
  const serverComments = await fetchOfferComments(id);
  const adaptedComments = commentsAdapter(serverComments);
  return adaptedComments;
};

const getAdaptedOffersNearby = async (id) => {
  const serverOffersNearby = await fetchOffersNearby(id);
  const adaptedOffersNearby = offersAdapter(serverOffersNearby);
  return adaptedOffersNearby;
};

export { getAdaptedOffersNearby, userInfoAdapter, offerAdapter, getAdaptedComments, offersAdapter };
