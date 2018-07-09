import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

const myStyle = {
  color: 'orange',
};

class TestMessage extends Component{

	render(){
		return <div className="box">
			<h2>
				<small style={myStyle}>To: {this.props.messageTo}</small>
				<br/>{this.props.testMessageContent}
				</h2>
		</div>
	}
}

export default TestMessage;