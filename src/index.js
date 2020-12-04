import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './App.css';

// this is here to mock the fetch requests, so you see the same data in your `fetch` as we use for the tests
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/worker')
  worker.start()
}

ReactDOM.render(<App />, document.getElementById('root'));
