import { NameSpace } from '../../const';

const getSelectedCityName = (state) => state[NameSpace.FILTER].selectedCity;

export {getSelectedCityName};
