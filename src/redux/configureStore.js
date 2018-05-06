import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import ThunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/index';
import DevTools from './DevTools';
import rootSaga from './sagas/index';
//import rootReducer from '../views/HomeRedux';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount the saga middleware on the Store
const finalCreateStore = compose(
  applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory)),
  //applyMiddleware(ThunkMiddleware),
  DevTools.instrument()
)(createStore);

// const reducer = combineReducers(
//   Object.assign({}, rootReducer, {routing: routerReducer,})
// );

// const reducer = combineReducers({
//   rootReducer,
//   routing: routerReducer
// }); 

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  sagaMiddleware.run(rootSaga);
  return store;
}