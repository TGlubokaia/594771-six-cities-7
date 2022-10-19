import { APIRoute } from '../const';
import api from '../index';

const handleDataFetch = (result) => {
  if (result.status === 200) {
    return result.data;
  } else {
    return [];
  }
};

const fetchOfferData = async (id) => {
  const offerData = api.get(APIRoute.OFFER(id));
  return offerData;
};

const fetchOfferComments = async (id) => {
  const offerCommentsData = await api.get(APIRoute.OFFER_COMMENTS(id));
  const offerComments = handleDataFetch(offerCommentsData);
  return offerComments;
};

const fetchOffersNearby = async (id) => {
  const offersNearbyData = await api.get(APIRoute.OFFERS_NEARBY(id));
  const offersNearby = handleDataFetch(offersNearbyData);
  return offersNearby;
};

const postComment = async (id, {comment, rating}) => {
  const newCommentData = await api.post(APIRoute.OFFER_COMMENTS(id), {comment, rating});
  return newCommentData;
};

const postFavoriteOffer = async (id, status) => {
  await api.post(APIRoute.FAVORITES_POST(id, status));
};

export { fetchOfferData, fetchOfferComments, fetchOffersNearby, postComment, postFavoriteOffer };
