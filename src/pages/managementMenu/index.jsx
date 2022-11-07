import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import Logo from '../../assets/logo.jpg'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('功能功能功能A', 'sub1', <MailOutlined />, [
    getItem('功能功能功能A-1', '1'),
    getItem('功能功能功能A-2', '2'),
  ]),
  getItem('功能功能功能B', 'sub2', <AppstoreOutlined />, [
    getItem('功能功能功能B-1', '3'),
    getItem('功能功能功能B-2', '4'),
    getItem('功能功能功能B-3', '5'),
  ]),
  getItem('功能功能功能C', 'sub4', <SettingOutlined />, [
    getItem('功能功能功能C-1', '6'),
    getItem('功能功能功能C-2', '7'),
  ]),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const ManagementMenu = () => {
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className='bg'>
      <div className='logo'>
        <img src={Logo} />
        <h2>上海正也医疗有限公司</h2>
      </div>
      <Menu
        className='menu'
        mode="inline"
        theme="dark"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
      />
    </div>
  );
}

export default ManagementMenu