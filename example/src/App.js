import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const myStyle = {
  color: 'orange',
};

class TestMessage extends Component{

	componentWillMount(){
		document.title = "My Title"
	  }

	render(){
		return <div className="box">
			<h2>
			Main / Home Page
			</h2>
		</div>
	}
}

export default TestMessage;