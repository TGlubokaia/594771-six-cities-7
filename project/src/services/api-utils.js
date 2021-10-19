import { APIRoute } from '../const';
import api from '../index';

const fetchOffer = (id) => (
  Promise.allSettled([
    api.get(APIRoute.OFFER(id)),
    api.get(APIRoute.OFFER_COMMENTS(id)),
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
      console.log(responses);
      return responses;
    })
);

export default fetchOffer;
