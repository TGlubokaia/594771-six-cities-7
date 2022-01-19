import { fetchOfferComments, fetchOffersNearby } from '../services/api-utils';


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
    maxAdults: offer.max_adults,
    title: offer.title,
    desc: offer.description,
    price: offer.price,
    previewImage: offer.preview_image,
    images: offer.images,
    rating: offer.rating,
    host: {
      hostAvatar: offer.host.avatar_url,
      id: offer.host.id,
      hostName: offer.host.name,
      isPro: offer.host.is_pro,
    },
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
    isPremium: offer.is_premium,
    isFavorite: offer.is_favorite,
  });
};

const offersAdapter = (serverOffers) => serverOffers.map((offer) => offerAdapter(offer));

const userInfoAdapter = (serverUserInfo) => ({
  avatarUrl: serverUserInfo['avatar_url'],
  email: serverUserInfo['email'],
  id: serverUserInfo['id'],
  isPro: serverUserInfo['is_pro'],
  userName: serverUserInfo['name'],
  token: serverUserInfo['token'],
});

const commentsAdapter = (serverComments) => serverComments.map((comment) => ({
  id: comment.id,
  rating: comment.rating,
  date: comment.date,
  comment: comment.comment,
  user: {
    userAvatar: comment.user['avatar_url'],
    id: comment.user,
    isPro: comment.user['is_pro'],
    userName: comment.user['name'],
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
