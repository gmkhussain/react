import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import MyRoutes from './Routes.js';
import {Provider} from "react-redux";
import store from './store';

//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	/*
		* Reusing single component with diffrent data
		* Utilizing Props to Create Reusable Components
		
	*/
	
	<div>
		<Provider store={store}>
			<MyRoutes />
		</Provider>
	</div>
, document.getElementById('root'));
//registerServiceWorker();
