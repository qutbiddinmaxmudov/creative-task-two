import { Action } from 'redux'

export interface FlatInterface {
  type: 'flat' | 'house'
  id: number
  attributes: {
    title: string
    rooms: number
    address: {
      city: string
      street: string
      house: string
      room: string
    }
    area: number
    unit: string
  }
  relationships: {
    type: string
    id: number
    attributes: {
      first_name: string
      last_name: string
      middle_name: string
    }
  }
}

export enum FlatsActionsType {
  FETCH_FLATS = 'FETCH_FLATS',
  SET_FLATS = 'SET_FLATS',
  SET_FLATS_LOADING_STATUS = 'SET_FLATS_LOADING_STATUS',
  LIKE_FLAT = 'LIKE_FLAT',
  UNLIKE_FLAT = 'UNLIKE_FLAT',
}

export interface FlatsStateInterface {
  flats: FlatInterface[]
  status: FlatsState
}

export interface LikedFlatsStateInterface {
  flats: number[]
}

export enum FlatsState {
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

export interface FetchFlatsActionInterface extends Action<FlatsActionsType> {
  type: FlatsActionsType.FETCH_FLATS
}

export interface SetFlatsActionInterface extends Action<FlatsActionsType> {
  type: FlatsActionsType.SET_FLATS
  payload: FlatInterface[]
}

export interface SetFlatsLoadingStatusInterface extends Action<FlatsActionsType> {
  type: FlatsActionsType.SET_FLATS_LOADING_STATUS
  payload: FlatsState
}

export interface LikeFlatActionInterface extends Action<FlatsActionsType> {
  type: FlatsActionsType.LIKE_FLAT
  payload: number
}

export interface UnlikeFlatActionInterface extends Action<FlatsActionsType> {
  type: FlatsActionsType.UNLIKE_FLAT
  payload: number
}

export interface RootState {
  flats: FlatsStateInterface
  likedFlats: LikedFlatsStateInterface
}

export type FlatsActions =
  | FetchFlatsActionInterface
  | SetFlatsActionInterface
  | SetFlatsLoadingStatusInterface
  | LikeFlatActionInterface
  | UnlikeFlatActionInterface
