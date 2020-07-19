import React, {memo} from 'react'
import useDeepEffect from 'use-deep-compare-effect'

export default memo(({watches=[], onUpdate, unMount}) => {
  useDeepEffect(() => {
    onUpdate && onUpdate()
    return () => unMount && unMount()
  }, watches)

  return null
})
