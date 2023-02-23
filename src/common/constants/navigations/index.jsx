import {
  AccountCircle,
  ContentPaste,
  Crop75,
  DateRange,
  Feed,
  Home,
  Language,
  Menu,
  Newspaper,
  Portrait,
} from '@mui/icons-material';

export const NAVIGATIONS = [
  // {
  //   title: 'Dashboard',
  //   icon: <Window />,
  //   isChildren: false,
  //   path: '/dashboard',
  // },
  {
    title: 'Quản lý người dùng',
    icon: <AccountCircle />,
    isChildren: false,
    path: '/users',
  },
  {
    title: 'Quản lý trang chủ',
    icon: <Home />,
    isChildren: true,
    path: '/homepage',
    children: [
      {
        title: 'Banner',
        icon: '',
        isChildren: false,
        path: '/homepage/banners',
      },
      {
        title: 'Thông báo',
        icon: '',
        isChildren: false,
        path: '/homepage/notifications',
      },
      {
        title: 'Sự kiện trong tháng',
        icon: '',
        isChildren: false,
        path: '/homepage/events',
      },
    ],
  },
  {
    title: 'Quản lý thông tin',
    icon: <Feed />,
    isChildren: true,
    path: '/informations',
    children: [
      {
        title: 'Khoa và bộ môn',
        icon: '',
        isChildren: false,
        path: '/informations/subjects',
      },
      {
        title: 'Phòng ban chức năng',
        icon: '',
        isChildren: false,
        path: '/informations/departments',
      },
      {
        title: 'Trung tâm và Viện',
        icon: '',
        isChildren: false,
        path: '/informations/centers',
      },
      {
        title: 'Đảng và Đoàn thể',
        icon: '',
        isChildren: false,
        path: '/informations/unions',
      },
    ],
  },
  {
    title: 'Quản lý Menu',
    icon: <Menu />,
    isChildren: true,
    path: '/menu',
    children: [
      {
        title: 'Menu',
        icon: '',
        isChildren: false,
        path: '/menu/mainmenu',
      },
      {
        title: 'Trang',
        icon: '',
        isChildren: false,
        path: '/menu/pages',
      },
      {
        title: 'Danh mục',
        icon: '',
        isChildren: false,
        path: '/menu/categories',
      },
    ],
  },
  {
    title: 'Quản lý nội dung',
    icon: <ContentPaste />,
    isChildren: false,
    path: '/contents',
  },
  {
    title: 'Lịch công tác',
    icon: <DateRange />,
    isChildren: false,
    path: '/schedule',
  },
  {
    title: 'Duyệt tin',
    icon: <Newspaper />,
    isChildren: true,
    path: '/approve',
    children: [
      {
        title: 'Danh sách website',
        icon: '',
        isChildren: false,
        path: '/approve/websites',
      },
      {
        title: 'Danh sách duyệt',
        icon: '',
        isChildren: false,
        path: '/approve/posts',
      },
    ],
  },
  {
    title: 'Nhân sự',
    icon: <Portrait />,
    isChildren: false,
    path: '/staff',
  },
  {
    title: 'Footer',
    icon: <Crop75 />,
    isChildren: false,
    path: '/footer',
  },
  {
    title: 'Ngôn ngữ',
    icon: <Language />,
    isChildren: false,
    path: '/languages',
  },
];
