import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TestMessage from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TestMessage testMessageContent="This is my test message" />, document.getElementById('root'));
//registerServiceWorker();
