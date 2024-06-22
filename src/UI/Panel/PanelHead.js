import React from 'react'

const PanelHead = (props) => {
    const { title } = props;
  return (
    <div className='p-6 text-start bg-white border-b-gray-100 border-b-2 text-black font-bold ' >
    {title}
    </div>
  )
}

export default PanelHead
