import React, { Component } from 'react';
import MyStatelessClock from './My_stateless';

class Clock extends Component{

	constructor(props){
		super(props);
		this.state = {
			currentTime: new Date().toLocaleTimeString()
		}
		this.updateTime();
	}
	
	
	/**updating time**/
		updateTime(){
			
			setInterval(() => {
				this.setState({
					currentTime : new Date().toLocaleTimeString()
				})			
			}, 1000)
			
			
		}
	/**./updating time**/	
	
	
	render(){
		return(
			//<h1>{this.state.currentTime}</h1>
			<MyStatelessClock time={this.state.currentTime} />
		)
	}

}

export default Clock;