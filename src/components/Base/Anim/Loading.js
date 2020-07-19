import React, {  } from 'react';

import {Spin} from 'antd';

const Loading = ({size, color, style}) => <div style={style} className="animated fadeIn pt-1 text-center"><Spin style={{verticalAlign: 'center'}} {...{size}} color="primary" /></div>

export const Overlay = ({size, color, style}) => <div
  style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255, 0.5)'}}
  className="animated fadeIn pt-1 text-center">
    <Spin style={{position: 'absolute', top: '50%', left: '50%'}} {...{size}}
      color="primary" />
  </div>

export default Loading
