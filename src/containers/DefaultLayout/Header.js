import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {useLogout} from '../../redux/hooks'

const { Header } = Layout

export default ({ }) => {
  const logout = useLogout()

  return (
    <Header>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key='1'>A</Menu.Item>
        <Menu.Item key='2'>B</Menu.Item>
        <Menu.Item key='3'>C</Menu.Item>
        <Menu.Item key='4' onClick={() => logout()} className='ml-auto'>Logout</Menu.Item>
      </Menu>
    </Header>
  );
}
