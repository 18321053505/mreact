import React from 'react';
import { Button, Row, Col, Select, Input, Form, Tag, DatePicker, Table } from 'antd'
import moment from 'moment';

const { Option } = Select

const SubAgreement = () => {
  const columns = [
    {
      title: '指定渠道编码',
      key: 'code',
      dataIndex: 'code'
    },
    {
      title: '指定渠道名称',
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: '所在省',
      key: 'province',
      dataIndex: 'province'
    },
  ]
  const data = [
    {
      key: '1',
      code: 'BJ00009',
      name: '宁波九州通药业有限公司',
      province: '浙江省'
    },
    {
      key: '2',
      code: 'BJ00029',
      name: '宁波九州通药业有限公司',
      province: '浙江省'
    },
    {
      key: '3',
      code: 'BJ00019',
      name: '宁波九州通药业有限公司',
      province: '浙江省'
    },
  ]
  return (
    <div className='agreement'>
      <div className='title'><h2><span>1</span>协议主体</h2></div>
      <div className='subAgreementForm'>
        <Form
          name='subAgreement'
          labelCol={{ span: 3 }}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label='协议客户'
                name='customer'
                rules={[{ required: true, message: '请选择客户' }]}
              >
                <Button>选择客户</Button>
                <h4 className='formText'>上海正也医疗有限公司</h4>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='协议状态'
                name='state'
              >
                <Select
                  className='formSelect'
                  defaultValue='normal'
                >
                  <Option value='normal'>正常</Option>
                  <Option value='abnormal'>异常</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='购进指标'
                name='amount'
              >
                <Select
                  className='formAmount'
                  defaultValue='amount1'
                >
                  <Option value='amount1'>金额</Option>
                  <Option value='amount2'>金额2</Option>
                </Select>
                <Input className='formInupt' placeholder='输入金额/数量' disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='纯销指标'
                name='index'
              >
                <Button className='formIndex'>金额</Button>
                <Input className='formInupt' placeholder='输入金额/数量' disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='销售区域'
                name='customer'
              >
                <Button>选择区域</Button>
                <Tag closable >全国</Tag>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='定制时间'
                name='time'
              >
                <DatePicker allowClear={false} showTime defaultValue={moment()} format='YYYY-MM-DD HH:mm' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='购进渠道'
                name='channel'
              >
                <Select
                  className='formAmount'
                  defaultValue='channel1'
                >
                  <Option value='channel1'>指定渠道</Option>
                  <Option value='channel2'>渠道</Option>
                </Select>
                <Input className='formInupt' placeholder='输入金额/数量' disabled />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
              />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}
export default SubAgreement