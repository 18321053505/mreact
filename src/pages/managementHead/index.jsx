import React, { useState } from 'react';
import { HomeFilled, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Breadcrumb } from 'antd';


const ManagementHead = () => {
  const items = [
    {
      label: '首页',
      key: 'home',
      icon: <HomeFilled />,
    },
    {
      label: '主数据',
      key: 'data',
      icon: <AppstoreOutlined />,
    },
    {
      label: '辖区管理',
      key: 'administration',
      icon: <SettingOutlined />,
    },
    {
      label: '销迅通',
      key: 'xuntong',
      icon: <SettingOutlined />,
    },
  ]
  const [current, setCurrent] = useState();
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu className='headMenu' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <div className='breadcrumb'>
      <Breadcrumb>
        <Breadcrumb.Item>
        <a href='#'>首页</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href='#'>年度协议管理</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href='#'>二级商协议</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
        <a href='#'>新增二级商协议</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h4>新增二级商协议</h4>
      </div>
    </>
  )
}
export default ManagementHead