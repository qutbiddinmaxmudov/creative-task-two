import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from './components/CardItem'
import { fetchFlatsAction } from './store/actions'
import { FlatsState, RootState } from './types'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFlatsAction())
  }, [dispatch])

  const { flats, status } = useSelector((state: RootState) => state.flats)

  return (
    <div className="container">
      <h1 className="title">Лучшие квартиры мира!</h1>
      <div className="cards">
        {status === FlatsState.LOADED ? flats.map((flat) => <CardItem key={flat.id} {...flat} />) : 'Loading'}
      </div>
    </div>
  )
}

export default App
