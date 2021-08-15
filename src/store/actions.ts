import {
  FetchFlatsActionInterface,
  FlatInterface,
  FlatsActionsType,
  FlatsState,
  LikeFlatActionInterface,
  SetFlatsActionInterface,
  SetFlatsLoadingStatusInterface,
  UnlikeFlatActionInterface,
} from '../types'

export const fetchFlatsAction = (): FetchFlatsActionInterface => ({
  type: FlatsActionsType.FETCH_FLATS,
})

export const setFlatsAction = (payload: FlatInterface[]): SetFlatsActionInterface => ({
  type: FlatsActionsType.SET_FLATS,
  payload,
})

export const setFlatsLoadingStatus = (payload: FlatsState): SetFlatsLoadingStatusInterface => ({
  type: FlatsActionsType.SET_FLATS_LOADING_STATUS,
  payload,
})

export const likeFlat = (payload: number): LikeFlatActionInterface => ({
  type: FlatsActionsType.LIKE_FLAT,
  payload,
})

export const unlikeFlat = (payload: number): UnlikeFlatActionInterface => ({
  type: FlatsActionsType.UNLIKE_FLAT,
  payload,
})
