import React from 'react';
import { render } from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import NewsHunt from './containers/NewsHunt';
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker';

let store = Redux.createStore(rootReducer);

render(
  <ReactRedux.Provider store={store}>
    <NewsHunt />
  </ReactRedux.Provider>, document.getElementById('root'));
serviceWorker.unregister();