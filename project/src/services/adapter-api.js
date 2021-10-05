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
  }),
  );
};


const userInfoAdapter = function (serverUserInfo) {

  return ({
    avatarUrl: serverUserInfo['avatar_url'],
    email: serverUserInfo['email'],
    id: serverUserInfo['id'],
    isPro: serverUserInfo['is_pro'],
    userName: serverUserInfo['name'],
    token: serverUserInfo['token'],
  });
};


export { offersAdapter, userInfoAdapter };
