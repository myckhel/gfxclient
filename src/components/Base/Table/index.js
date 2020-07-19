import React, { memo, useState } from 'react';
import {} from 'antd';

export default memo(() => {
  return (
    <></>
  )
})

export const SearchInput = memo(({search}) => {
  const [value, setInput] = useState('')

  return null

  return (
    <InputGroup>
      <Input value={value} onChange={({target: {value}}) => setInput(value)} addon placeholder='Search' />
      <InputGroupAddon addonType='append'>
        <Button onClick={() => search(value)}>
          <i className='fa fa-search' />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  )
})

export const TRow = ({children}) => <tr>{children}</tr>
