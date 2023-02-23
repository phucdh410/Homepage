export const FILES = {
  UPLOAD: '/files/upload',
};

export const PERMISSIONS = {
  UPLOAD: '/permissions',
};

export const AUTH = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  GET_PROFILE: '/auth/get-profile',
  LOGOUT: '/auth/logout',
};

export const USERS = {
  GET_USERS: '/users/all',
  GET_USER_BY_ID: '/users', // :id
  UPDATE_USER: '/users', // :id
  DELETE_USER: '/users', // :id
};

export const BANNERS = {
  CREATE_BANNER: '/banners',
  GET_BANNERS: '/banners/all',
  GET_BANNER_BY_ID: '/banners', // :id
  UPDATE_BANNER: '/banners', // :id
  DELETE_BANNER: '/banners', // :id
};
