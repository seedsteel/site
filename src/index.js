import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import SeedsteelApp from './SeedsteelApp';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<SeedsteelApp />, document.getElementById('root'));
registerServiceWorker();
