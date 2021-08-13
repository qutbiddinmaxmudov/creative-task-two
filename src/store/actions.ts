import {
  FetchFlatsActionInterface,
  FlatInterface,
  FlatsActionsType,
  FlatsState,
  SetFlatsActionInterface,
  SetFlatsLoadingStatusInterface,
} from '../types'

export const FetchFlatsAction = (): FetchFlatsActionInterface => ({
  type: FlatsActionsType.FETCH_FLATS,
})

export const SetFlatsAction = (payload: FlatInterface[]): SetFlatsActionInterface => ({
  type: FlatsActionsType.SET_FLATS,
  payload,
})

export const SetFlatsLoadingStatus = (payload: FlatsState): SetFlatsLoadingStatusInterface => ({
  type: FlatsActionsType.SET_FLATS_LOADING_STATUS,
  payload,
})


