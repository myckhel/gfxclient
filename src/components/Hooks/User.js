import React, {useState, memo, useEffect} from 'react'
import { Bar, Line } from 'react-chartjs-2';
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'
import { useStatsCount, useAnalysis, useUsers, useUser, useMergeState } from '../../redux/hooks'
import UseEffect from './UseEffect'
// import {UseEffect} from 'react-class-component-hooks'
import moment from 'moment'

export const UseUsers = memo(({onUpdate}) => {
  const {users, loading, ...rest} = useUsers()

  return <UseEffect watches={[users, loading]} onUpdate={() => onUpdate({users, loading, ...rest})} />
})

export const UseUser = memo(({id, onUpdate}) => {
  const {user, loading, ...rest} = useUser(id)

  return <UseEffect watches={[user, loading]} onUpdate={() => onUpdate({user, loading, ...rest})} />
})

const brandPrimary = getStyle('--primary')
const brandInfo = getStyle('--info')

const month_tree = {}
const day_tree = {}
const week_tree = {}
const hour_tree = {}

const getMonths = () => {
  const months = []
  for (var i = 0; i < 7; i++) {
    const month = moment().subtract(i, 'months')
    month_tree[month.format('M')] = 6 - i
    months.push(month.format('MMMM'))
  }
  return months.reverse()
}

const getHours = () => {
  const hours = []
  for (var i = 0; i < 7; i++) {
    const hour = moment().subtract(i, 'hours')
    hour_tree[hour.format('H')] = 6 - i
    hours.push(hour.format('HH')+':00')
  }
  return hours.reverse()
}

const getDays = () => {
  const days = []
  for (var i = 0; i < 7; i++) {
    const day = moment().subtract(i, 'days')
    day_tree[day.day()] = 6 - i
    days.push(day.format('dddd'))
  }
  return days.reverse()
}

const getWeeks = () => {
  const weeks = []
  for (var i = 0; i < 16; i++) {
    const week = moment().subtract(i, 'weeks')
    week_tree[week.format('W')] = 15 - i
    weeks.push('Week '+week.format('WW'))
  }
  return weeks.reverse()
}
// Card Chart 1
const cardChartData1 = {
  labels: getMonths(),
  datasets: [
    {
      label: 'Monthly Users',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [0,0,0,0,0,0,0],
    },
  ],
};

// Card Chart 2
const cardChartData2 = {
  labels: getHours(),
  datasets: [
    {
      label: 'Hourly Users',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

// Card Chart 3
const cardChartData3 = {
  labels: getDays(),
  datasets: [
    {
      label: 'Daily Users',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ],
};

// Card Chart 4
const cardChartData4 = {
  labels: getWeeks(),
  datasets: [
    {
      label: 'Monthly Users',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ],
};


const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

export const UseStatsCount = ({}) => {
  const [state, setState] = useMergeState({
    data1:cardChartData1, options1: cardChartOpts1,
    data2:cardChartData2, options2: cardChartOpts2,
    data3:cardChartData3, options3: cardChartOpts3,
    data4:cardChartData4, options4: cardChartOpts4,
    dropdownOpen: false,
    radioSelected: 2,
  })
  const {dropdownOpen, radioSelected,
    data1, options1,
    data2, options2,
    data3, options3,
    data4, options4,
  } = state

  const {today, week, count, month, loading} = useStatsCount()
  const {hours, weeks, days, months, loading: analLoading} = useAnalysis()
  useEffect(() => {
    if (!empty([months])) {
      const newdata1 = data1
      const newoptions1 = options1
      const newdata2 = data2
      const newoptions2 = options2
      const newdata3 = data3
      const newoptions3 = options3
      const newdata4 = data4
      const newoptions4 = options4
      months.map(({month, count}) => newdata1.datasets[0].data[month_tree[month]] = count)
      newoptions1.scales.yAxes[0].ticks = {
        display: false,
        min: Math.min.apply(Math, newdata1.datasets[0].data) - 5,
        max: Math.max.apply(Math, newdata1.datasets[0].data) + 5,
      }
      hours.map(({hour, count}) => newdata2.datasets[0].data[hour_tree[hour]] = count)
      newoptions2.scales.yAxes[0].ticks = {
        display: false,
        min: Math.min.apply(Math, newdata2.datasets[0].data) - 5,
        max: Math.max.apply(Math, newdata2.datasets[0].data) + 5,
      }
      days.map(({day, count}) => newdata3.datasets[0].data[day_tree[day]] = count)
      newoptions3.scales.yAxes[0].ticks = {
        display: false,
        min: Math.min.apply(Math, newdata3.datasets[0].data) - 5,
        max: Math.max.apply(Math, newdata3.datasets[0].data) + 5,
      }
      weeks.map(({week, count}) => newdata4.datasets[0].data[week_tree[week]] = count)
      newoptions4.scales.yAxes[0].ticks = {
        display: false,
        min: Math.min.apply(Math, newdata4.datasets[0].data) - 5,
        max: Math.max.apply(Math, newdata4.datasets[0].data) + 5,
      }
      setState({data1: newdata1, options1: newoptions1, data2: newdata2, options2: newoptions2, data3: newdata3, options3: newoptions3, data4: newdata4, options4: newoptions4})
    }
  }, [months])
  const display = (text) => loading ? 'loading...' : text

  return (
    <>
    <Col xs="12" sm="6" lg="3">
      <Card className="text-white bg-info">
        <CardBody className="pb-0">
          <div className="text-value">{display(count)}</div>
          <div>Total Users</div>
        </CardBody>
        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
          <Line redraw data={data1} options={options1} height={70} />
        </div>
      </Card>
    </Col>

    <Col xs="12" sm="6" lg="3">
      <Card className="text-white bg-primary">
        <CardBody className="pb-0">
          <div className="text-value">{display(today)}</div>
          <div>New Users Today</div>
        </CardBody>
        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
          <Line redraw data={data2} options={options2} height={70} />
        </div>
      </Card>
    </Col>

    <Col xs="12" sm="6" lg="3">
      <Card className="text-white bg-warning">
        <CardBody className="pb-0">
          <div className="text-value">{display(week)}</div>
          <div>New Users This Week</div>
        </CardBody>
        <div className="chart-wrapper" style={{ height: '70px' }}>
          <Line redraw data={data3} options={options3} height={70} />
        </div>
      </Card>
    </Col>

    <Col xs="12" sm="6" lg="3">
      <Card className="text-white bg-danger">
        <CardBody className="pb-0">

          <div className="text-value">{display(month)}</div>
          <div>New Users This Month</div>
        </CardBody>
        <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
          <Bar redraw data={data4} options={options4} height={70} />
        </div>
      </Card>
    </Col>
    </>
  )
}
