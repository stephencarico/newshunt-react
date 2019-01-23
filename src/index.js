import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import * as ReactRedux from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';
import Threadz from './containers/threadz';
import * as serviceWorker from './serviceWorker';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

render(
  <ReactRedux.Provider store={store}>
    <Threadz />
  </ReactRedux.Provider>, document.getElementById('root'));
serviceWorker.unregister();