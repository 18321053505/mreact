import React from 'react';
import { Button, Tabs, Input } from 'antd'

const { TextArea } = Input
const { TabPane } = Tabs
const SubSupplement = () => {
  return (
    <div className='agreement'>
      <div className='title'><h2><span>3</span>补充协议</h2></div>
      <div className='addAgreement'>
        <Tabs
          defaultActiveKey='agreement1'
        >
          <TabPane tab='补充协议1' key='agreement1'>
            <div className='subAgreement'>
              <h4>协议内容1：</h4>
              <Button className='deleteBtn'>删除</Button>
            </div>
            <TextArea className='textarea'
              style={{
                height: 150,
                resize: 'none',
              }} 
              />
          </TabPane>
          <TabPane tab='补充协议2' key='agreement2'>
          <div className='subAgreement'>
              <h4>协议内容2：</h4>
              <Button className='deleteBtn'>删除</Button>
            </div>
            <TextArea className='textarea'
              style={{
                height: 150,
                resize: 'none',
              }} 
              />
          </TabPane>
          <TabPane tab='补充协议3' key='agreement3'>
          <div className='subAgreement'>
              <h4>协议内容3：</h4>
              <Button className='deleteBtn'>删除</Button>
            </div>
            <TextArea className='textarea'
              style={{
                height: 150,
                resize: 'none',
              }} 
              />
          </TabPane>
        </Tabs>
        <Button className='addBtn'>新增</Button>
      </div>
    </div>
  )
}
export default SubSupplement