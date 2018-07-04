import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import TestMessage from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	/*
		* Reusing single component with diffrent data
		* Utilizing Props to Create Reusable Components
		
	*/
	
	<div>
		<TestMessage messageTo="Amoos" testMessageContent="This is 1st message" />
		<TestMessage messageTo="Cruise" testMessageContent="This is 2nd message" />
		<TestMessage messageTo="James" testMessageContent="This is 3rd message" />
		<TestMessage messageTo="Robert" testMessageContent="This is 4th message" />
	</div>
, document.getElementById('root'));
//registerServiceWorker();
