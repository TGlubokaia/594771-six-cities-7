import {getRandomIntInclusive} from '../utils.js';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const reviews = [
  {
    userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Max',
    userRating: getRandomIntInclusive(1, 5),
    date: 'April 2019',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'Kira',
    userRating: getRandomIntInclusive(1, 5),
    date: 'June 2018',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    userAvatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    userName: 'George',
    userRating: getRandomIntInclusive(1, 5),
    date: 'December 2018',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  }
],

export {reviews};
