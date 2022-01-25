import { NameSpace } from '../../const';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

const getAuthorizationInfo = (state) => state[NameSpace.USER].authorizationInfo;

export { getAuthorizationStatus, getAuthorizationInfo };
