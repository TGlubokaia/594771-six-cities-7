import { APIRoute } from '../const';
import api from '../index';

const fetchOfferData = async (id) => {
  const offerData = api.get(APIRoute.OFFER(id));
  return offerData;
};

const fetchOfferSupplData = async (id) => (
  Promise.allSettled([
    api.get(APIRoute.OFFER_COMMENTS(id)),
    api.get(APIRoute.OFFERS_NEARBY(id)),
  ])
    .then((results) => {
      const responses = results.map((result) => {
        if (result.status === 'rejected') {
          return [];
        }
        if (result.status === 'fulfilled') {
          return result.value;
        }
      });
      return responses;
    })
);

export {fetchOfferSupplData, fetchOfferData};
