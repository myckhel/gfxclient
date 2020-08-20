import React, {memo, useState} from 'react'

import {NavLink} from 'react-router-dom'

import { Layout, Menu, Typography } from 'antd';
import navigation from '../../_nav';
import {
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout
const { SubMenu } = Menu
const { Title } = Typography

export default memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      breakpoint='sm'
      onCollapse={setCollapsed}
      collapsible collapsed={collapsed}>
      <Title level={3} style={{flex: 1, color: '#fff', textAlign: 'center', marginTop: 10}}>Gfx Facility</Title>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
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
      <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      </Menu>
    </Sider>
  )
})
