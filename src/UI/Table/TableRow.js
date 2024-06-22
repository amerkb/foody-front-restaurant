import React from 'react'

const TableRow = ({ children }) => {
  return (
    <tr className='border-t-[1px] border-[#dee2e6]'>
      { children }
    </tr>
  )
}

export default TableRow
