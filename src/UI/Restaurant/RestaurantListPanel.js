import React from 'react'
import PanelHead from '../Panel/PanelHead'
import PanelBody from '../Panel/PanelBody'
import TableRetaurant from './TableRestaurant'

const RestaurantListPanel = () => {
  return (
    <div>
      <PanelHead title='Restaurants List '/>
      <PanelBody content={<TableRetaurant/>} />
      </div>
  )
}

export default RestaurantListPanel

