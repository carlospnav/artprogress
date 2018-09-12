import { createStore } from 'redux'
import reducers from './reducers'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from "../store/saga";

// const saga = createSagaMiddleware()

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(saga)
)

// saga.run(rootSaga);

export default store
