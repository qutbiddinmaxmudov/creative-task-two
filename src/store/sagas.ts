import { call, put, takeEvery } from 'redux-saga/effects'
import { flatsApi } from '../services/flatsApi'
import { FlatInterface, FlatsActionsType, FlatsState } from '../types'
import { setFlatsAction, setFlatsLoadingStatus } from './actions'

export function* FetchFlatsRequest() {
  try {
    yield put(setFlatsLoadingStatus(FlatsState.LOADING))
    const data: FlatInterface[] = yield call(flatsApi.fetchFlats)
    yield put(setFlatsAction(data))
    yield put(setFlatsLoadingStatus(FlatsState.LOADED))
  } catch (error) {
    yield put(setFlatsLoadingStatus(FlatsState.ERROR))
  }
}

export function* watchFlatActions() {
  yield takeEvery(FlatsActionsType.FETCH_FLATS, FetchFlatsRequest)
}
