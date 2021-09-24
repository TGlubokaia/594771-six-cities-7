const offersAdapter = function (serverOffers) {
  return serverOffers.map((offer) => ({
    id: offer.id,
    type: offer.type,
    city: {
      location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom,
      },
      cityName: offer.city.name, // name
    },
    goods: offer.goods,
    bedrooms: offer.bedrooms,
    maxAdults: offer.max_adults, //max_adults
    title: offer.title,
    desc: offer.description, // description
    price: offer.price,
    previewImage: offer.preview_image, // preview_image
    images: offer.images,
    rating: offer.rating,
    host: {
      hostAvatar: offer.host.avatar_url, // avatar_url
      id: offer.host.id,
      hostName: offer.host.name, // name
      isPro: offer.host.is_pro, // is_pro
    },
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
    isPremium: offer.is_premium, // is_premium
    isFavorite: offer.is_favorite, // is_favorite
  }),
  );
};


export {offersAdapter};
