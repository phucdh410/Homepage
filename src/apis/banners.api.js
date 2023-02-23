import { get, post, put, remove } from '@axios/request';

import { BANNERS } from './url';

export const createBanner = async (body) => {
  return await post(BANNERS.CREATE_BANNER, body);
};

export const getBanners = async (body) => {
  return await post(BANNERS.GET_BANNERS, body);
};

export const getBannerById = async (id, language_id) => {
  return await get(`${BANNERS.GET_BANNER_BY_ID}/${id}`, {
    params: { language_id },
  });
};

export const updateBanner = async (id, body) => {
  return await put(`${BANNERS.UPDATE_BANNER}/${id}`, body);
};

export const deleteBanner = async (id) => {
  return await remove(`${BANNERS.DELETE_BANNER}/${id}`);
};
