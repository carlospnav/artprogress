import { all } from 'redux-saga/effects'
import artPiecesSaga from './artPieces'

export default function * rootSaga () {
  yield all([
    ...artPiecesSaga
  ])
}
