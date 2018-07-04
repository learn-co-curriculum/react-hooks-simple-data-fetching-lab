import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import chai from 'chai'
import './App.css';
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme()) // Note the invocation at the end

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
