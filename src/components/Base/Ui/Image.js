import React, {memo, useState, useEffect} from 'react'
import {Modal} from 'antd'

const Image = memo(({ style, src, alt, onView}) => {
  const [visible, setVisible] = useState(false)

  return (<>
    <img onClick={() => onView && setVisible(!visible)} style={{...{cursor: 'pointer'}, ...style}} alt={alt} src={src} className="img" />
    <ImageViewer onCancel={(bool) => setVisible(bool)} visible={visible} srcs={[src]} />
  </>)
})

export const ImageViewer = memo(({srcs, alt, visible, onCancel}) => {
  const [state, setState] = useState({
    index: 0,
  })
  const {url, index, isArray} = state

  return (
    <Modal visible={visible} onCancel={() => onCancel(false)} footer={null}>
      <Image src={srcs[index]} alt={alt} style={{width: '100%', height: '100%'}} />
    </Modal>
  )
})

export default Image
