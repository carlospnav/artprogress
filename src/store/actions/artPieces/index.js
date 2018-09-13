import {
  ARTPIECES_REQUEST,
  ARTPIECES_REQUEST_SUCCESS
} from '../../../constants'

export function requestArtPieces (category, foundation) {
  return {
    type: ARTPIECES_REQUEST,
    payload: {
      category,
      foundation
    }
  }
}

export function successArtPiecesRequest (artPieces) {
  return {
    type: ARTPIECES_REQUEST_SUCCESS,
    payload: { artPieces }
  }
}
