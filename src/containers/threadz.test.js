import React from 'react';
import ReactDOM from 'react-dom';
import threadz from './threadz';

describe('threadz', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<threadz />, div)
  });
});
