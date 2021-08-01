import { nanoid } from 'nanoid';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers = [
  {
    id: nanoid(),
    type: 'Apartment',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      cityName: 'Amsterdam',
    },
    goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    bedrooms: 3,
    maxAdults: 4,
    title: 'Beautiful luxurious apartment at great location',
    desc: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    price: 100,
    previewImage: 'img/offer-1-1.jpg',
    images: ['img/offer-1-1.jpg', 'img/offer-1-2.jpg', 'img/offer-1-3.jpg', 'img/offer-1-4.jpg', 'img/offer-1-5.jpg', 'img/offer-1-6.jpg'],
    rating: 4.7,
    host: {
      hostAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      hostName: 'Angelina',
      isPro: true,
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isPremium: false,
    isFavorite: false,
  },
  {
    id: nanoid(),
    type: 'Private Room',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      cityName: 'Amsterdam',
    },
    goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine'],
    bedrooms: 1,
    maxAdults: 2,
    title: 'Dream view',
    desc: 'Right at the heart of Notting Hill Gate, on the 8th floor where you can enjoy an amazing view. We speak English, Spanish, Portuguese and Italian and always ready to assist our guests with information about London if they need. It’s a family home of three with a spare room for you.',
    price: 50,
    previewImage: 'img/offer-1-2.jpg',
    images: ['img/offer-1-1.jpg', 'img/offer-1-2.jpg', 'img/offer-1-3.jpg', 'img/offer-1-4.jpg', 'img/offer-1-5.jpg', 'img/offer-1-6.jpg'],
    rating: 4,
    host: {
      hostAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      hostName: 'Alex',
      isPro: false,
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isPremium: false,
    isFavorite: true,
  },
  {
    id: nanoid(),
    type: 'House',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      cityName: 'Amsterdam',
    },
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    bedrooms: 3,
    maxAdults: 8,
    title: 'Architectural guesthouse in London Fields',
    desc: 'Tucked round the back of a London Fields cul-de-sac is this stylish Swedish/Japanese inspired Guesthouse, featured in The Guardian, The Modern House journal and East London Homes published by Hoxton Press.',
    price: 160,
    previewImage: 'img/offer-1-3.jpg',
    images: ['img/offer-1-1.jpg', 'img/offer-1-2.jpg', 'img/offer-1-3.jpg', 'img/offer-1-4.jpg', 'img/offer-1-5.jpg', 'img/offer-1-6.jpg'],
    rating: 3,
    host: {
      hostAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      hostName: 'Casey',
      isPro: false,
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isPremium: true,
    isFavorite: true,
  },
  {
    id: nanoid(),
    type: 'Hotel',
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      cityName: 'Amsterdam',
    },
    goods: ['Heating', 'Cable TV'],
    bedrooms: 1,
    maxAdults: 2,
    title: 'Double Garden View room - London House Hotel',
    desc: 'London House Hotel is a newly refurbished and well established modern hotel in central London. We offer affordable accommodation that provides the comfort, style and service you would usually only expect from much more expensive hotels in London.',
    price: 70,
    previewImage: 'img/offer-1-4.jpg',
    images: ['img/offer-1-1.jpg', 'img/offer-1-2.jpg', 'img/offer-1-3.jpg', 'img/offer-1-4.jpg', 'img/offer-1-5.jpg', 'img/offer-1-6.jpg'],
    rating: 4.8,
    host: {
      hostAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostName: 'Taylor',
      id: 4,
      isPro: false,
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isPremium: true,
    isFavorite: false,
  },
];

export default offers;
