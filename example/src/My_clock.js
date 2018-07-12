import React, { Component } from 'react';
import MyStatelessClock from './My_stateless';
import MyStatelessAnalog from './My_stateless_analog';

class Clock extends Component{

	constructor(props){
		super(props);
		this.state = {
			currentTime: new Date().toLocaleString()
		}
		this.updateTime();
	}
	
	
	/**updating time**/
		updateTime(){
			
			setInterval(() => {
				this.setState({
					currentTime : new Date().toLocaleString()
				})			
			}, 1000)
			
			
		}
	/**./updating time**/	
	
	
	render(){
		return(
			<div>
				<MyStatelessClock time={this.state.currentTime} />
				<MyStatelessAnalog time={this.state.currentTime} />
			</div>
		)
	}

}

export default Clock;