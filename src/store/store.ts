import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { flatsReducer, likedFlatsReducer } from './reducer'
import { watchFlatActions } from './sagas'
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const saga = createSagaMiddleware()

const reducer = combineReducers({
  flats: flatsReducer,
  likedFlats: likedFlatsReducer,
})

export const store = createStore(reducer, composeEnhancers(applyMiddleware(saga)))

saga.run(watchFlatActions)
