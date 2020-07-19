import React, {memo, useState} from 'react'

import {useMergeState} from '../../../redux/hooks'

import './style.css'

import {Form, Select, Row, Typography, Steps, Col, Button, message} from 'antd'
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

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (<>
    <Title>Book Now</Title>
    <Steps current={current}>
    {steps.map(({title, icon}, step) => (
      <Step {...{status: getStatus(step, current), title, icon: step === current ? <LoadingOutlined /> : icon}} key={title} />
    ))}
    </Steps>
    <div className="steps-content">
      <Form.Item
        label="Service Type"
        name="service_type"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
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
