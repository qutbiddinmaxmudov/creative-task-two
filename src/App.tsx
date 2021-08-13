import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { FetchFlatsAction } from './store/actions'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FetchFlatsAction())
  }, [dispatch])
  
  return (
    <div className="container">
      <h1 className="title">Лучшие квартиры мира!</h1>
      <div className="cards">{/* <CardItem /> */}</div>
    </div>
  )
}

export default App
