import React, { Component } from 'react';
//import MyStatelessClock from './My_stateless';
//import MyStatelessAnalog from './My_stateless_analog';
import Logger from './Logger';

class Clock extends Component{

	constructor(props){
		super(props);
		this.state = {
			currentTime: new Date().toLocaleString(),
			counter: 0
		}
		this.updateTime();

		console.log("Clock constructor");
	}
	
	
	/**updating time**/
		updateTime(){
			
			setInterval(() => {
				this.setState({
					currentTime : new Date().toLocaleString(),
					counter: this.state.counter + 1 //<-- counter updating
				})			
			}, 1000)
			
			console.log("Clock updateTime");
			
		}
	/**./updating time**/	
	
	
	render(){
		console.log("Clock render")
		return(
			<div>

				{ 
				  /* ^ added {curly brackets} for if condition & add comment in JSX 
					{ JSX comment }
				  */
				 (this.state.counter < 2)?(<Logger time={this.state.currentTime} />):(<div>After 2 seconds, Now <h4>{this.state.counter}</h4> seconds Timeout</div>)
				
				}
				
			</div>
			
		)
		
	}

}

export default Clock;