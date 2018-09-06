import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import MyRoutes from './Routes.js';
import {Provider} from "react-redux";

import store from './store';

//const myStyle = {  color: 'orange', };

class App extends Component{

	componentWillMount(){
		document.title = "My Title"
	  }

	render(){
		return(
			<Provider store={store}>
				<MyRoutes />
			</Provider>
		)
	}
}

export default App;