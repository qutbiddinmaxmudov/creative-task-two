import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likeFlat, unlikeFlat } from '../store/actions'
import { FlatInterface, RootState } from '../types'

const CardItem: React.FC<FlatInterface> = ({ id, type, attributes, relationships }) => {
  const dispatch = useDispatch()

  const { flats } = useSelector((state: RootState) => state.likedFlats)

  const handleLike = () => {
    dispatch(likeFlat(id))
  }
  const handleUnlike = () => {
    dispatch(unlikeFlat(id))
  }

  return (
    <div className="card">
      <h3 className="card__title">
        {type === 'flat' ? 'Квартира' : 'Дом'}: {attributes.title}
      </h3>
      <div className="card__info">
        <p>Количество комнат: {attributes.rooms}</p>
        <p>
          Площадь: {attributes.area}
          {attributes.unit}
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
        {relationships.attributes.first_name} {relationships.attributes.middle_name}{' '}
        {relationships.attributes.last_name}
      </a>
      {flats.includes(id) ? (
        <button className="card__button" onClick={handleUnlike}>
          Удалить из избранных
        </button>
      ) : (
        <button className="card__button" onClick={handleLike}>
          Добавить в избранное
        </button>
      )}
    </div>
  )
}

export default CardItem
