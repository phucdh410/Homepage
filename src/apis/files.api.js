import { post } from '@axios/request';
import { formatFileName } from '@func';

import { FILES } from './url';

export const uploadFile = (file) => {
  const { name, type } = file;

  const newFile = new File([file], formatFileName(name), { type });

  const payload = new FormData();

  payload.append('file', newFile);

  return post(FILES.UPLOAD, payload);
};
