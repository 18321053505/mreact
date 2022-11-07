import React from 'react';
import 'antd/dist/antd.css'
import './index.css';
import ManagementMenu from '../managementMenu'
import ManagementMenuHead from '../managementHead'
import ManagementContent from '../managementContent';
import ManagementBottom from '../managementBottom';


const Management = () => {

  return (
   <div className='management'>
    <ManagementMenu/>
    <div className='content'>
    <ManagementMenuHead/>
    <ManagementContent/>
    <ManagementBottom/>
    </div>
   </div>
  )
}

export default Management