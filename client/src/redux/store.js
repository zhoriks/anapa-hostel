import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import watchActions from './saga/saga';
import watchActionsClient from './saga/sagaClient';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(watchActions);
sagaMiddleware.run(watchActionsClient);
export default store;
