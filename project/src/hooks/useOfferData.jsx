import { useEffect, useState } from 'react';
import browserHistory from '../browser-history';
import {  getAllMapPoints, AppRoute} from '../const';
import { offerAdapter, getAdaptedComments, getAdaptedOffersNearby } from '../services/adapter-api';
import { fetchOfferData } from '../services/api-utils';


const useOfferData = (offerId, handleComments) => {
  const [offer, setOffer] = useState({});
  const [offersNearby, setOffersNearby] = useState([]);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const fetchAllOfferData = async (response) => {
      const adaptedComments = await getAdaptedComments(offerId);
      const adaptedOffersNearby = await getAdaptedOffersNearby(offerId);
      const adaptedOfferData = offerAdapter(response.data);
      const allMapPoints = getAllMapPoints(adaptedOfferData, adaptedOffersNearby);

      setOffer(adaptedOfferData);
      setOffersNearby(adaptedOffersNearby);
      setPoints(allMapPoints);
      handleComments(adaptedComments);
    };

    const fetchData = async () => {
      try {
        const result = await fetchOfferData(offerId);
        if (result.status === 200) {
          await fetchAllOfferData(result);
        }
      } catch {
        browserHistory.push(AppRoute.NOT_FOUND);
      }
    };

    fetchData();

  }, [offerId]);

  return [offer, offersNearby, points];
};

export default useOfferData;
