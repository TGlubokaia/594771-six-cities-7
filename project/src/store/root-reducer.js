import { combineReducers } from 'redux';
import { offersData } from './offers-data/offers-data';
import { offersFilter } from './offers-filter/offers-filter';
import { user } from './user/user';
import { NameSpace } from '../const';

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.FILTER]: offersFilter,
  [NameSpace.USER]: user,
});
