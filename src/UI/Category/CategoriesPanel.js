import React from 'react'
import PanelHead from '../Panel/PanelHead'
import PanelBody from '../Panel/PanelBody'
import TableRetaurant from './CategoriesTable'

const RestaurantListPanel = () => {
  return (
    <div>
      <PanelHead title='Categories List '/>
      <PanelBody content={<TableRetaurant/>} />
      </div>
  )
}

export default RestaurantListPanel

