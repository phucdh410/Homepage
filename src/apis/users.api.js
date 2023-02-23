import { get, post, put, remove } from '@axios/request';

import { AUTH, USERS } from './url';

export const createUser = async (body) => {
  return await post(AUTH.REGISTER, body);
};

export const getUsers = async (body) => {
  return await post(USERS.GET_USERS, body);
};

export const getUserById = async (id) => {
  return await get(`${USERS.GET_USER_BY_ID}/${id}`);
};

export const updateUser = async (id, body) => {
  return await put(`${USERS.UPDATE_USER}/${id}`, body);
};

export const deleteUser = async (id) => {
  return await remove(`${USERS.DELETE_USER}/${id}`);
};
