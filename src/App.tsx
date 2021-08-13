import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from './components/CardItem'
import { FetchFlatsAction } from './store/actions'
import { RootState } from './types'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FetchFlatsAction())
  }, [dispatch])

  const { flats, status } = useSelector((state: RootState) => state.flats)

  return (
    <div className="container">
      <h1 className="title">Лучшие квартиры мира!</h1>
      <div className="cards">
        {flats.map((flat) => (
          <CardItem key={flat.id} {...flat} />
        ))}
      </div>
    </div>
  )
}

export default App
