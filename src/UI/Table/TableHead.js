import React from 'react'

const TableHead = ({title}) => {
  return (
    <th className='p-3 whitespace-nowrap text-center  border-b-[1px] border-white'>
     {title}
    </th>
  )
}

export default TableHead
