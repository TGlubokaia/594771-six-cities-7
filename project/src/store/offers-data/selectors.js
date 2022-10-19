import { NameSpace } from '../../const';

const getOffers = (state) => state[NameSpace.DATA].initialOffers;

const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;

const getFavorites = (state) => state[NameSpace.DATA].favoriteOffers;

export {getOffers, getLoadedDataStatus, getFavorites};
