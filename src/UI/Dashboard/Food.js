import React from 'react'
import Bar from '../Charts/FoodBar'
import PanelBody from '../Panel/PanelBody'
import PanelHead from '../Panel/PanelHead'

const Food = () => {
  return (
    <div className='px-[15px]   bg-white'>
        <PanelHead title="Compare Foods By Request"/>
        <PanelBody content={<Bar />} />
    </div>
  )
}

export default Food
