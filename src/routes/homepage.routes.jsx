import { lazy } from 'react';

import { ROUTES } from './routes';

const ListBannersPage = lazy(() =>
  import('@modules/homepage/pages/ListBannersPage'),
);
const DetailBannerPage = lazy(() =>
  import('@modules/homepage/pages/DetailBannerPage'),
);
const UpdateBannerPage = lazy(() =>
  import('@modules/homepage/pages/UpdateBannerPage'),
);

export const HomepageRoutes = [
  {
    path: ROUTES.HOMEPAGE.BANNERS.LIST,
    element: <ListBannersPage />,
  },
  {
    path: ROUTES.HOMEPAGE.BANNERS.CREATE,
    element: <DetailBannerPage />,
  },
  {
    path: ROUTES.HOMEPAGE.BANNERS.UPDATE,
    element: <UpdateBannerPage />,
  },

  {
    path: '/homepage/notifications',
    element: <div>Quản lý trang chủ / thông báo</div>,
  },
  {
    path: '/homepage/events',
    element: <div>Quản lý trang chủ / sự kiện</div>,
  },
];
