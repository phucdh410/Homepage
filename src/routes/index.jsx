import { Outlet } from 'react-router-dom';
import { CLoginLayout, CMainLayout } from '@layouts';

import { HomepageRoutes } from './homepage.routes';
import { UsersRoutes } from './users.routes';

export const browserRouter = [
  {
    path: '',
    errorElement: <div>404</div>,
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <CMainLayout />,
        children: [
          {
            path: '/dashboard',
            element: <div>Dashboaard</div>,
          },

          ...UsersRoutes,
          ...HomepageRoutes,

          {
            path: '/informations/subjects',
            element: <div>Quản lý thông tin / khoa bộ môn</div>,
          },
          {
            path: '/informations/departments',
            element: <div>Quản lý thông tin / phòng ban</div>,
          },
          {
            path: '/informations/centers',
            element: <div>Quản lý thông tin / trung tâm</div>,
          },
          {
            path: '/informations/unions',
            element: <div>Quản lý thông tin / đảng</div>,
          },

          {
            path: '/menu/mainmenu',
            element: <div>Quản lý menu</div>,
          },
          {
            path: '/menu/pages',
            element: <div>Quản lý trang</div>,
          },
          {
            path: '/menu/categories',
            element: <div>Quản lý danh mục</div>,
          },

          {
            path: '/contents',
            element: <div>Qlý nội dung</div>,
          },

          {
            path: '/schedule',
            element: <div>Lịch công tac</div>,
          },

          {
            path: '/approve/websites',
            element: <div>Quản lý website</div>,
          },
          {
            path: '/approve/posts',
            element: <div>Quản lý bài viết</div>,
          },

          {
            path: '/staff',
            element: <div>nhân sự</div>,
          },

          {
            path: '/footer',
            element: <div>footer</div>,
          },

          {
            path: '/languages',
            element: <div>ngôn ngữ</div>,
          },
        ],
      },
      {
        path: '/login',
        element: <CLoginLayout />,
      },
    ],
  },
];
