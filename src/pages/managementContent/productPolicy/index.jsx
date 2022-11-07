import React from 'react';
import { Button, Select, Input, DatePicker, Table } from 'antd'
import moment from 'moment';

const ProductPolicy = () => {
  const columnsPrice = [
    {
      title: '协议价',
      key: 'agreement',
      dataIndex: 'agreement',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
    {
      title: '票折（元）',
      key: 'ticket',
      dataIndex: 'ticket',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
    {
      title: '购进指标量（大单位）',
      key: 'largeUnits',
      dataIndex: 'largeUnits',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
    {
      title: '购进指标量（小单位）',
      key: 'smallUnits',
      dataIndex: 'smallUnits',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
    {
      title: '购进金额（万元）',
      key: 'amount',
      dataIndex: 'amount',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
    {
      title: '纯销指标量（小单位）',
      key: 'amount',
      dataIndex: 'amount',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
    {
      title: '纯销指标金额（万元）',
      key: 'amount',
      dataIndex: 'amount',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
  ]
  const dataPrice = [
    {
      key: '1',
      agreement: '',
      ticket: '',
      largeUnits: '',
      smallUnits: '',
      amount: ''
    },
  ]
  const columns = [
    {
      title: '分销奖励',
      key: 'distribution',
      dataIndex: 'distribution',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
    {
      title: '费用科目',
      key: 'subject',
      dataIndex: 'subject',
      render: text => <Select
      defaultValue='jack'
      options={[
        {
          value: 'jack',
          label: '单选1',
        },
        {
          value: 'lucy',
          label: '单选2',
        },
        {
          value: 'Yiminghe',
          label: '单选3',
        },
      ]}
    />,
    },
    {
      title: '零售配送',
      key: 'delivery',
      dataIndex: 'delivery',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
    {
      title: '费用科目',
      key: 'account',
      dataIndex: 'account',
      render: text => <Select
      defaultValue='jack'
      mode="multiple"
      options={[
        {
          value: 'jack',
          label: '多选1',
        },
        {
          value: 'lucy',
          label: '多选2',
        },
        {
          value: 'Yiminghe',
          label: '多选3',
        },
      ]}
    />,
    },
    {
      title: '医疗送商',
      key: 'amount',
      dataIndex: 'amount',
      render: text => <Input className='formInupt' placeholder='请输入' />,
    },
    {
      title: '费用科目',
      key: 'accountTwo',
      dataIndex: 'accountTwo',
      render: text => <Select
      defaultValue='jack'
      mode="multiple"
      options={[
        {
          value: 'jack',
          label: '多选1',
        },
        {
          value: 'lucy',
          label: '多选2',
        },
        {
          value: 'Yiminghe',
          label: '多选3',
        },
      ]}
    />,
    },
    {
      title: '自定义7',
      key: 'custom',
      dataIndex: 'custom',
      render: text =>  <DatePicker allowClear={false} showTime defaultValue={moment()} format='YYYY-MM-DD HH:mm' />,
    },
    {
      title: '自定义8',
      key: 'customTwo',
      dataIndex: 'customTwo',
      render: text =>  <DatePicker allowClear={false} showTime defaultValue={moment()} format='YYYY-MM-DD HH:mm' />,
    },
  ]
  const data = [
    {
      key: '1',
      distribution: '',
      subject: '',
      delivery: '',
      account: '',
      amount: '',
      accountTwo: '',
      custom: '',
      customTwo: ''
    },
  ]
  return (
    <div className='agreement'>
      <div className='title'><h2><span>2</span>产品政策</h2></div>
      <div className='productPolicy'>
        <div className='productAdd'>
          <Button className='addBtn'>添加产品</Button>
          <h4><span>购进总指标（万元）：</span>￥152.65</h4>
          <h4><span>指标按季度分解（万元）：</span>【Q1】￥12.5，【Q2】￥12.5，【Q3】￥12.5，【Q4】￥12.5</h4>
          <h4><span>纯销总指标（万元）：</span>￥152.65</h4>
        </div>
        <div className='productContent'>
          <div className='product'>
            <div>
              <label>产品：</label>
              <Button>选择产品</Button>
              <p>美复胶丸&nbsp;&nbsp;24粒/盒</p>
              <label>协议有效期：</label>
              <Button>2020-1-20 ~ 2022-1-20</Button>
            </div>
            <Button className='deleteBtn'>删除</Button>
          </div>
          <div className='productData'>
            <Table
              columns={columnsPrice}
              dataSource={dataPrice}
              pagination={false}
            />
          </div>
          <div className='productData'>
            <Table
              className='productTwo'
              columns={columns}
              dataSource={data}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductPolicy