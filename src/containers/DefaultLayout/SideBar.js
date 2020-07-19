import React, {memo, useState} from 'react'

import {NavLink} from 'react-router-dom'

import { Layout, Menu } from 'antd';
import navigation from '../../_nav';

const { Sider } = Layout

export default memo(() => {
  const [collapsed, setState] = useState(false);

  const toggle = () => {
    setState(!collapsed);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      {navigation.items.map(({name, url, icon}, i) => (
        <Menu.Item key={i+""} icon={icon}>
          <NavLink
            to={url}
            onClick={e => {}}
          >
            {name}
          </NavLink>
        </Menu.Item>
      ))}
      </Menu>
    </Sider>
  )
})
