import { get, post } from '@axios/request';

import { AUTH } from './url';

export const profile = () => {
  return get(AUTH.GET_PROFILE);
};

export const login = (body) => {
  return post(AUTH.LOGIN, body);
};

export const logout = () => {
  return get(AUTH.LOGOUT);
};
