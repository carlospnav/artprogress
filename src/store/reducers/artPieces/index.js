import { ARTPIECES_REQUEST_SUCCESS } from '../../../constants'

export default function (state = {}, action) {
  switch (action.type) {
    case ARTPIECES_REQUEST_SUCCESS:
      return state
    default:
      return state
  }
}
