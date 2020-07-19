import React from 'react'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: <UserOutlined />,
    },
    {
      name: 'Booking',
      url: '/booking',
      icon: <VideoCameraOutlined />,
    },
    {
      name: 'Payment',
      url: '/payments',
      icon: <UploadOutlined />,
    },
  ],
};
