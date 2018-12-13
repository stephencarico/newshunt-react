import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsHunt from './NewsHunt';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NewsHunt />, document.getElementById('root'));
serviceWorker.unregister();
