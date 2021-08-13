import React from 'react'
import { FlatInterface } from '../types'

const CardItem: React.FC<FlatInterface> = ({ id, type, attributes, relationships }) => {
  return (
    <div className="card">
      <h3 className="card__title">
        {type === 'flat' ? 'Квартира' : 'Дом'}: {attributes.title}
      </h3>
      <div className="card__info">
        <p>Количество комнат: {attributes.rooms}</p>
        <p>
          {attributes.area} {attributes.unit}
        </p>
      </div>
      <h4 className="card__subtitle">Адрес:</h4>
      <div className="card__address">
        <span>Город: {attributes.address.city}</span>
        <span>Улица: {attributes.address.street}</span>
        <span>Дом: {attributes.address.house}</span>
        <span>Квартира: {attributes.address.room}</span>
      </div>
      <h4 className="card__subtitle">Контакт:</h4>
      <a href={`/${relationships.type}/${relationships.id}`} className="card__contact">
        {relationships.attributes.first_name}
        {relationships.attributes.middle_name}
        {relationships.attributes.last_name}
      </a>
      <button>Добавить в избранное</button>
    </div>
  )
}

export default CardItem
