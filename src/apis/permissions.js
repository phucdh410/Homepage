import { get } from '@axios/request';

import { PERMISSIONS } from './url';

export const getPermissions = async () => {
  return await get(PERMISSIONS.UPLOAD);
};
