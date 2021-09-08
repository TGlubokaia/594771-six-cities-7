import {getRandomIntInclusive} from '../utils/utils';
import { nanoid } from 'nanoid';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const reviews = [
  {
    id: nanoid(),
    rating: getRandomIntInclusive(1, 5),
    date: 'April 2019', //2019-05-08T14:13:56.569Z
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    user: {
      userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      userName: 'Max',
    },
  },
  {
    id: nanoid(),
    rating: getRandomIntInclusive(1, 5),
    date: 'June 2018',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    user: {
      userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      userName: 'Kira',
    },
  },
  {
    id: nanoid(),
    rating: getRandomIntInclusive(1, 5),
    date: 'December 2018',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    user: {
      userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      userName: 'George',
    },
  },
];

export default reviews;
