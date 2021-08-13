import { call, put, takeEvery } from 'redux-saga/effects'
import { flatsApi } from '../services/flatsApi'
import { FlatInterface, FlatsActionsType, FlatsState } from '../types'
import { SetFlatsAction, SetFlatsLoadingStatus } from './actions'

export function* FetchFlatsRequest() {
  try {
    yield put(SetFlatsLoadingStatus(FlatsState.LOADING))
    const data: FlatInterface[] = yield call(flatsApi.fetchFlats)
    yield put(SetFlatsAction(data))
    yield put(SetFlatsLoadingStatus(FlatsState.LOADED))
  } catch (error) {
    yield put(SetFlatsLoadingStatus(FlatsState.ERROR))
  }
}

export function* watchFlatActions() {
  yield takeEvery(FlatsActionsType.FETCH_FLATS, FetchFlatsRequest)
}
