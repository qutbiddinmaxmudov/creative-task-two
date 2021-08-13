import produce, { Draft } from 'immer'
import { FlatsActions, FlatsState, FlatsStateInterface, FlatsActionsType, LikedFlatsStateInterface } from '../types'

const initialFlatsState: FlatsStateInterface = {
  flats: [],
  status: FlatsState.NEVER,
}

const initialLikedFlatsState: LikedFlatsStateInterface = {
  flats: [],
}

export const flatsReducer = produce((draft: Draft<FlatsStateInterface>, action: FlatsActions) => {
  switch (action.type) {
    case FlatsActionsType.SET_FLATS:
      draft.flats = action.payload
      break
    case FlatsActionsType.SET_FLATS_LOADING_STATUS:
      draft.status = action.payload
      break
    default:
      break
  }
}, initialFlatsState)

export const likedFlatsReducer = produce((draft: Draft<LikedFlatsStateInterface>, action: FlatsActions) => {
  switch (action.type) {
    case FlatsActionsType.LIKE_FLAT:
      break
    case FlatsActionsType.UNLIKE_FLAT:
      break
    default:
      break
  }
}, initialLikedFlatsState)
