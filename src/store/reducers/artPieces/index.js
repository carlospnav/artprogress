import { ARTPIECES_REQUEST_SUCCESS } from '../../../constants'

export default function (state = { '1': { name: 'ArtPiece 1' } }, action) {
  switch (action.type) {
    case ARTPIECES_REQUEST_SUCCESS:
      return state
    default:
      return state
  }
}
