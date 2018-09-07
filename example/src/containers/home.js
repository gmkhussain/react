import React, { Component } from 'react';

const myStyle = {
  color: 'orange',
};

class HomePage extends Component{

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

export default HomePage;