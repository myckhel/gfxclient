import React, {memo, useState} from 'react'

import {useMergeState} from '../../../redux/hooks'

import './style.css'

import {Input, Form, Select, Row, Typography, Steps, Col, Button, message} from 'antd'
import { UserOutlined, HomeOutlined, FieldTimeOutlined,  EyeOutlined, MoneyCollectOutlined, LoadingOutlined, SmileOutlined, AccountBookOutlined } from '@ant-design/icons';

const {Title} = Typography
const { Step } = Steps;
const { Option } = Select;

const steps = [
  {title: 'Book', icon: <AccountBookOutlined />},
  {title: 'Location', icon: <HomeOutlined />},
  {title: 'Schedule', icon: <FieldTimeOutlined />},
  {title: 'Preview', icon: <EyeOutlined />},
  {title: 'Pay', icon: <MoneyCollectOutlined />},
  {title: 'Done', icon: <SmileOutlined />},
]

const getStatus = (step, current) => step === current ? 'process' :  step < current ? 'finish' : 'wait'

export default memo(() => {
  const [state, setState] = useMergeState({
    current: 0,
  })
  const {current} = state

  const next = () => setState({ current: current + 1 });

  const prev = () => setState({ current: current - 1 });

  return (<>
    <Title>Book Now</Title>
    <Steps current={current}>
    {steps.map(({title, icon}, step) => (
      <Step {...{status: getStatus(step, current), title, icon: step === current ? <LoadingOutlined /> : icon}} key={title} />
    ))}
    </Steps>
    <div className="steps-content">
      {current === 0 ? <BookForm /> :
      current === 1 ? (
        <BookLocation />
      ) : (
        <Title level={4}>Coming Soon</Title>
      )}
    </div>
    <div className="steps-action">
      {current < steps.length - 1 && (
        <Button type="primary" onClick={() => next()}>
          Next
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button type="primary" onClick={() => message.success('Processing complete!')}>
          Done
        </Button>
      )}
      {current > 0 && (
        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
          Previous
        </Button>
      )}
    </div>
  </>)
})

const BookLocation = () => {
  return (
    <div>
    <Row>
      <Col offset={4} span={12}>
        <Form.Item
          label="House Address"
          name="address"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input value="" placeholder='Enter Address' />
        </Form.Item>
      </Col>
      </Row>
      <Row>
        <Col offset={4} span={5}>
          <Form.Item
            label="Town/City"
            name="city"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input value="" placeholder='Enter Town or City' />
          </Form.Item>
        </Col>
        <Col offset={2} span={5}>
          <Form.Item
            label="State"
            name="state"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Select defaultValue="lagos" style={{  }}>
              <Option value="lagos">Lagos</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Col offset={4} span={12}>
        <Form.Item
          label="Intructions"
          name="state"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input.TextArea placeholder='Leave Instructions' />
        </Form.Item>
      </Col>
    </div>
  )
}

const BookForm = () => {
  const rooms = [1,2,3,4,5,6]

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return (
    <Row>
      <Col offset={6} span={8}>
        <Form.Item
          label="Service Type"
          name="service_type"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select defaultValue="regular" style={{  }} onChange={handleChange}>
            <Option value="regular">Regular Cleaning</Option>
            <Option value="deep">Deep Cleaning</Option>
            <Option value="fumigation">Fumigation</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col offset={6} span={8}>
        <Form.Item
          label="Amount Of Rooms"
          name="rooms_count"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select defaultValue={1} style={{  }} onChange={handleChange}>
          {rooms.map((count) => (
            <Option value={count}>{count} Room</Option>
          ))}
          </Select>
        </Form.Item>
      </Col>
      <Col offset={6} span={8}>
        <Form.Item
          label="Clean Interval"
          name="clean_interval"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select defaultValue={'one time'} style={{  }} onChange={handleChange}>
            <Option value={'one time'}>One Time</Option>
            <Option value={'monthly'}>Monthly</Option>
            <Option value={'weekly'}>Weekly</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  )
}
