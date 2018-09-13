import { call, put, takeEvery } from 'redux-saga/effects'
import { successArtPiecesRequest } from '../../actions/artPieces'
import { ARTPIECES_REQUEST } from '../../../constants'
import * as API from '../../api/artPieces'

/* Change this to actually filter art pieces. */
function * fetchArtPieces (action) {
  try {
    const { category, foundation } = action.payload
    const artPieces = yield call(API.getArtPieces, category, foundation)
    yield put(successArtPiecesRequest(artPieces))
  } catch (e) {
    console.log('something')
  }
}

export default [
  takeEvery(ARTPIECES_REQUEST, fetchArtPieces)
]
