# <img src="https://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" style="position: relative; top: 5px;" height="80" /> 


## Get Started with ReactJS CLI ⚛️

1. First install the global package: 
```
npm install -g create-react-app
```

2. Open project location then open CMD and type
```
create-react-app your-project-name
```
once it’s done, you can see created folder named 'your-project-name'


3. Type <kbd>npm start</kbd> starting the Server 
browser will automatically open with localhost:3000





## :fish_cake: How to use SCSS and SASS with React App (Without Ejecting) 
1. open command line and type
*i : install
```
npm i -S node-sass-chokidar
```


2. Open <kbd>package.json</kbd> file and modify script block as per following
```
//...
"scripts": {
    "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
//...
```

3. type this command and press enter
```
npm install --save npm-run-all
```

4. Add SCSS file <code>App.scss</code> next to CSS file.








## Updating state value in React ( Digital Ticking Clock )

Create <code>My_clock.js</code>

```javascript
//My_clock.js
import React, { Component } from 'react';

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
			<h1>{this.state.currentTime}</h1>
		)
	}

}

export default Clock;
```




```javascript
//index.js
...
import Clock from './My_clock'; /*import Clock Class from My_clock.js */
...

ReactDOM.render(
	<div>
		<Clock /> /** display here **/
	</div>
, document.getElementById('root'));

```







## Stateless functional components in React

#### Stateless
You should default to using <b>stateless</b> components. Since they use no state, it's very easy to tell when a component should be re-rendered, since they will display the same thing if their props do not change.

#### Statefull
You should use <b>stateful</b> components when you need to use setState or when you need to use lifecycle hooks.




1. Create new file 'My_stateless.js'
```javascript
//My_stateless.js
import React from 'react'; /* not important import Component in Stateless Component */

function MyStatelessClock(props){
    return <div>My Stateless Clock: {props.time}</div>
}


export default MyStatelessClock;
```


2. Modify 'My_clock.js'
```javascript
...
import MyStatelessClock from './My_stateless';
...
	render(){
		return(
		 ...
			<MyStatelessClock time={this.state.currentTime} /> /**<- add this code**/
		 ...
		)
	}
...
```











# Common mistakes in React
* <kbd>component</kbd> should start with CAPITAL 'C' <kbd>Component</kbd>

* Don't use <code>=</code> in setState, Use <code>:</code> instead of '='