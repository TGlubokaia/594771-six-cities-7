import { NameSpace } from '../../const';

const getCityChange = (state) => state[NameSpace.FILTER].selectedCity;

export {getCityChange};
