import { APIRoute } from '../const';
import api from '../index';

const fetchOffer = (id) => (
  Promise.allSettled([
    api.get(APIRoute.OFFER(id)),
    api.get(APIRoute.OFFER_COMMENTS(id)),
    api.get(APIRoute.OFFERS_NEARBY(id)),
  ])
    .then((results) => {
      const responses = results.map((result) => {
        if (result.status === 'rejected') {
          return result.reason;
        }
        if (result.status === 'fulfilled') {
          return result.value;
        }
      });
      return responses;
    })
);

export default fetchOffer;
