import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import * as ReactRedux from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import NewsHunt from './containers/NewsHunt';
import * as serviceWorker from './serviceWorker';

const middleware = [ thunk ];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

render(
  <ReactRedux.Provider store={store}>
    <NewsHunt />
  </ReactRedux.Provider>, document.getElementById('root'));
serviceWorker.unregister();