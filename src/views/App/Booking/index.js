import React, {memo, useState, useEffect} from 'react'

import {useMergeState} from '../../../redux/hooks'
import moment from 'moment'
import services from '../../../func/async/service'

import './style.css'

import { Divider, Space, TimePicker, DatePicker, Input,
  Form, Select, Row, Typography, Steps, Col, Button, Spin,
  message} from 'antd'
import { UserOutlined, HomeOutlined, FieldTimeOutlined,  EyeOutlined, MoneyCollectOutlined, LoadingOutlined, SmileOutlined, AccountBookOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query'

const {Text, Title, Paragraph} = Typography
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
      {current === 0 ? (
        <BookForm />
      ) : current === 1 ? (
        <BookLocation />
      ) : current === 2 ? (
        <Schedule />
      ) : current === 3 ? (
        <Preview />
      ) : (
        <Title level={4}>Coming Soon</Title>
      )}
    </div>
    <Row justify='space-between' align='middle' className="steps-action">
      <Button
        disabled={current === 0}
        onClick={() => prev()}>
        Previous
      </Button>

      <Title level={3}>N18,000</Title>

      <Button
        type="primary"
        onClick={() => current === steps.length - 1 ? message.success('Processing complete!') : next()}>
      {current === steps.length - 1 ? 'Done' : 'Next'}
      </Button>
    </Row>
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

const Preview = () => {
  return (
    <div>
      <Title level={3}>Confirm Booking</Title>
      <Divider orientation="center">Booking Details</Divider>
      <PLine label='Service Type' value='Regular' />
      <PLine label='Number Of Rooms' value='1' />
      <PLine label='Cleaning Interval' value='One Time' />
      <Divider orientation="center">Location Details</Divider>
      <PLine label='Address' value='1A City of praize plaza, Akins Bus stop' />
      <PLine label='City/Town' value='Ajah' />
      <PLine label='State' value='Lagos' />
      <Divider orientation="center">Schedule Details</Divider>
      <PLine label='Date' value='2020-07-22' />
      <PLine label='Time' value='01:21' />
    </div>
  )
}

const PLine = ({label, value}) => <Paragraph>{label}:  {value}</Paragraph>

const Schedule = () => {
  const onChange = (date) => console.log({date})

  const disabledDate = current => Date.now() > current
  const format = 'HH:mm';

  return (<div>
    <Paragraph>When Should We Come?</Paragraph>
    <Row align='middle' justify='center'>
      <Space>
        <DatePicker disabledDate={disabledDate} onChange={onChange} />
        <TimePicker
          defaultValue={moment(moment().add(1, 'hours'), format)}
          format={format}
        />
      </Space>
    </Row>
  </div>)
}

const BookForm = () => {
  const rooms = [1,2,3,4,5,6]

  // useEffect(() => {
  //   // init()
  // }, [])

  // const init = async () => {
  //   try {
  //     const res = await services()
  //     // console.log(res);
  //   } catch (e) {
  //   } finally {
  //
  //   }
  // }

  const {isLoading, error, data, ...r} = useQuery('services', () => services())

  console.log({isLoading, error, data, ...r});

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  if (isLoading) {
    return <Spin size="lg" color="secondary" />
  }

  return (
    <Form>
    <Row>
      <Col offset={6} span={10}>
        <Form.Item
          label="Service Type"
          name="service_type"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select defaultValue={data[0]?.name} style={{  }} onChange={handleChange}>
            {data?.map(({name, id}) => (
              <Option key={id+''} value={id}>{name}</Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col offset={6} span={10}>
        <Form.Item
          label="Amount Of Rooms"
          name="rooms_count"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Select defaultValue={1} style={{  }} onChange={handleChange}>
          {rooms.map((count, i) => (
            <Option key={''+i} value={count}>{count} Room</Option>
          ))}
          </Select>
        </Form.Item>
      </Col>
      <Col offset={6} span={10}>
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
    </Form>
  )
}
