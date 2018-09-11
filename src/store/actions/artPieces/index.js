import {
  ARTPIECES_REQUEST,
  ARTPIECES_REQUEST_SUCCESS
} from '../../constants'

export function requestArtPieces () {
  return {
    type: ARTPIECES_REQUEST
  }
}

export function successArtPiecesRequest (artPieces) {
  return {
    type: ARTPIECES_REQUEST_SUCCESS,
    payload: artPieces
  }
}
