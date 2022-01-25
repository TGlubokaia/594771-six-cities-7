import { NameSpace } from '../../const';

const getOffers = (state) => state[NameSpace.DATA].initialOffers;

const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;

export {getOffers, getLoadedDataStatus};
