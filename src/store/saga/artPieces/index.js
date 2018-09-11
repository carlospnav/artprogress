import { call, put, takeEvery } from 'redux-saga/effects'
import { successArtPiecesRequest } from '../..actions/artPieces'
import { ARTPIECES_REQUEST } from '../../../constants'
import API from '../api'

/* Change this to actually filter art pieces. */
function * fetchArtPieces () {
  try {
    const artPieces = yield call(API.getArtPieces)
    yield put(successArtPiecesRequest(artPieces))
  } catch (e) {

  }
}

export default [
  takeEvery(ARTPIECES_REQUEST, fetchArtPieces)
]
