import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class TestMessage extends Component{
	render(){
		return <h2>{this.props.testMessageContent}</h2>
	}
}

export default TestMessage;