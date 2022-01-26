import { useEffect, useState } from 'react';
import { offersAdapter } from '../services/adapter-api';
import { fetchFavorites } from '../services/api-utils';

const useFavorites = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchFavorites();
      const adaptedFavoritesOffers = await offersAdapter(result);
      setOffers(adaptedFavoritesOffers);
    };
    fetchData();
  });

  return offers;
};

export default useFavorites;
