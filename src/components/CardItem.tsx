import React from 'react'
import { FlatInterface } from '../types'

const CardItem: React.FC<FlatInterface> = ({ type, attributes }) => {
  return (
    <div className="card">
      <h3 className="card__title">
        {type === 'flat' ? 'Квартира' : 'Дом'}: {attributes.title}
      </h3>
    </div>
  )
}

export default CardItem
