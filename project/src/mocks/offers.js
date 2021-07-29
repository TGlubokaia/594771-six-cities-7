import { nanoid } from 'nanoid';
import { reviews } from './reviews';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const offers = [
  {
    id: nanoid(),
    type: 'apartment',
    isPremium: false,
    bedroomsCount: 3,
    capacity: 4,
    title: 'Beautiful &amp; luxurious apartment at great location',
    desc: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    price: 100,
    images: ['img/offer-1-1.jpg', 'img/offer-1-2.jpg', 'img/offer-1-3.jpg', 'img/offer-1-4.jpg', 'img/offer-1-5.jpg', 'img/offer-1-6.jpg'],
    rating: 4.7,
    isFavorite: false,
    host: {
      hostAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostName: 'Angelina',
      isPro: true,
    },
    offerReviews: reviews,
  },
  {
    id: nanoid(),
    type: 'room',
    isPremium: false,
    bedroomsCount: 1,
    capacity: 2,
    title: 'Dream view',
    desc: 'Right at the heart of Notting Hill Gate, on the 8th floor where you can enjoy an amazing view. We speak English, Spanish, Portuguese and Italian and always ready to assist our guests with information about London if they need. It’s a family home of three with a spare room for you.',
    price: 50,
    images: ['img/offer-1-1.jpg', 'img/offer-1-2.jpg', 'img/offer-1-3.jpg', 'img/offer-1-4.jpg', 'img/offer-1-5.jpg', 'img/offer-1-6.jpg'],
    rating: 4.7,
    isFavorite: false,
    host: {
      hostAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostName: 'Alex',
      isPro: false,
    },
    offerReviews: reviews,
  },
  {
    id: nanoid(),
    type: 'house',
    isPremium: true,
    bedroomsCount: 3,
    capacity: 8,
    title: 'Architectural guesthouse in London Fields',
    desc: 'Tucked round the back of a London Fields cul-de-sac is this stylish Swedish/Japanese inspired Guesthouse, featured in The Guardian, The Modern House journal and East London Homes published by Hoxton Press.',
    price: 160,
    images: ['img/offer-1-1.jpg', 'img/offer-1-2.jpg', 'img/offer-1-3.jpg', 'img/offer-1-4.jpg', 'img/offer-1-5.jpg', 'img/offer-1-6.jpg'],
    rating: 4.7,
    isFavorite: false,
    host: {
      hostAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostName: 'Casey',
      isPro: false,
    },
    offerReviews: reviews,
  },
  {
    id: nanoid(),
    type: 'hotel',
    isPremium: true,
    bedroomsCount: 1,
    capacity: 2,
    title: 'Double Garden View room - London House Hotel',
    desc: 'London House Hotel is a newly refurbished and well established modern hotel in central London. We offer affordable accommodation that provides the comfort, style and service you would usually only expect from much more expensive hotels in London.',
    price: 70,
    images: ['img/offer-1-1.jpg', 'img/offer-1-2.jpg', 'img/offer-1-3.jpg', 'img/offer-1-4.jpg', 'img/offer-1-5.jpg', 'img/offer-1-6.jpg'],
    rating: 4.7,
    isFavorite: false,
    host: {
      hostAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      hostName: 'Taylor',
      isPro: false,
    },
    offerReviews: reviews,
  }
];

export {offers};
