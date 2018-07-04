import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class TestMessage extends Component{
	render(){
		return <div className="box"><h2><small>To: {this.props.messageTo}</small> <br/>{this.props.testMessageContent} </h2></div>
	}
}

export default TestMessage;