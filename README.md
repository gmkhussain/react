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

Props | State |
-------- | -------- |
Props are read-only | state changes can be asynchronous
Props can not be modified | state can be modified using `this.setState`











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





## Stateful and Stateless Components in React

<b>Stateful</b> components are always class components. stateful components have a state that gets initialized in the constructor. 

Stateful | Stateless |
-------- | -------- |
`constructor(props){...` should use | without `constructor` |
this.props.my_props_name | props.my_props_name * doesn't need to use `this.`




1. Modify 'My_clock.js'
```javascript
...
import MyStatelessAnalog from './My_stateless_analog';
...
	render(){
		return(
			<div>
				<MyStatelessClock time={this.state.currentTime} />
				<MyStatelessAnalog time={this.state.currentTime} />
			</div>
		)
	}
...
```


2. Create file for stateless functional 'My_stateless_analog'
```javascript

import React from 'react';

function MyStatelessAnalog(props){

    console.log(props.time);

    let time = new Date(props.time);

    let ClockHand = {
        borderRadius: '50%',
        borderStyle: 'solid',
        width:200,
        height:200,
    }


    let SecondPin = {
        position: 'relative',
        top:100,
        left:100,
        width:'45%',
        height:1,
        backgroundColor: 'green',
        transform: 'rotate('+ ((time.getSeconds()/60)*360 - 90 ).toString() + 'deg)',
        transformOrigin: '0% 0%',
    }
    
    let MinutePin = {
        position: 'relative',
        top:100,
        left:100,
        width:'40%',
        height:2,
        backgroundColor: 'blue',
        transform: 'rotate('+ ((time.getMinutes()/60)*360 - 90 ).toString() + 'deg)',
        transformOrigin: '0% 0%',
    }
    
    let HourPin = {
        position: 'relative',
        top:100,
        left:100,
        width:'20%',
        height:4,
        backgroundColor: 'orange',
        transform: 'rotate('+ ((time.getHours()/60)*360 - 90 ).toString() + 'deg)',
        transformOrigin: '0% 0%',
    }


    return (
        <div style={ClockHand}>
            <div style={SecondPin}></div>
            <div style={MinutePin}></div>
            <div style={HourPin}></div>
        </div>
    )
}


export default MyStatelessAnalog;

```



## LifeCycle while component updating
```javascript
componentWillReceiveProps(nextProps){
    console.log("Next Props: ", nextProps);
}


shouldComponentUpdate(newProps, newState){
    console.log("should component update");
    console.log("New Props", newProps);
    console.log("New State", newState);
    return true; 
    /* return false -> component updating in background but should not display on view */
}


componentWillUpdate(newProps, newState){
	//just before update component
}


componentDidUpdate(oldProps, oldState){
	//just after update component
	console.log("component did update");
}


componentDidMount()(newProps, newState){
	//just after render component
	console.log("component did mount");
}


componentWillUnmount()(){
	//just after render component
	console.log("component will Unmount just before end or destroyed *trigger when component out of screen ");
}

```
NOTE: `componentDidUpdate()` will not works if `shouldComponentUpdate()` has `returns false`



# Events

## Increment and Decrease number onClick in React

```javascript
import React, { Component } from 'react';

class MyEvent extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 1
        }
        this.incrementHandler = this.incrementHandler.bind(this);
        this.decrementHandler = this.decrementHandler.bind(this);
    }

    
    incrementHandler(){
        this.setState(
            {
            counter: this.state.counter + 1
            }   
        )
    }


    decrementHandler(){
        this.setState(
            {
            counter: this.state.counter - 1
            }   
        )
    }


    render(){
        return(
            <div>
                <button onClick={this.incrementHandler}>Counter +</button>
                <span className="counter"> {this.state.counter} </span>
                <button onClick={this.decrementHandler}>Counter -</button>
            </div>
        )
    }

}

export default MyEvent;
```










## How to set the document title in React
```javascript
...
class TestMessage extends Component{
	
	componentWillMount(){
		document.title = "My Title"
	}

  render(){
		return(
			<b> test </b>
		      )
		  }
  
  
}
```



## Capturing data from an user input in ReactJS
```javascript
import React, { Component } from 'react';

class MyForm extends Component{

    constructor(props){
        super(props);
        this.state={
            username: "amoos jhon"
        }
        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler(event){
        this.setState({
            username: event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.eventHandler} />
                <span>{this.state.username}</span>
            </div>
        )
    }
}

export default MyForm;
```










## Adding values to array with Event Handler in ReactJS
```javascript
import React, { Component } from 'react';


class MyForm extends Component{


    constructor(props){
        super(props);
        
        this.state={
            username: '',
            allusers: []
        }

        this.eventHandler = this.eventHandler.bind(this);
        this.arrayHandler = this.arrayHandler.bind(this);
    }


    eventHandler(event){
        this.setState({
            username: event.target.value
        })
    }

    arrayHandler(event){
        let currentUser = this.state.allusers;
        console.log(currentUser);
        currentUser.push(this.state.username); //<-- without <span> element
        //currentUser.push(<span className="any-class-name">{this.state.username}</span>);  //<-- with <span> element
        this.setState({
            allusers: currentUser,
            username: ''
        })
        console.log("Hello : " + this.state.allusers);
    }


    render(){
        return(
            <div>
                <input type="text" name="username" value={this.state.username} onChange={this.eventHandler} />
                <button onClick={this.arrayHandler}>Click to Store Username in Array</button>
                <span>{this.state.allusers}</span>
            </div>
        )
    }
}

export default MyForm;
```




# Errors / Issues

### Uncaught TypeError anyVaribleName.push is not a function Error in ReactJS
```javascript
...
this.state={
	anotherVar: '',
    anyVaribleName: '' //<-- Incorrect syntax .push()
	anyVaribleName: [] //<-- Correct syntax .push()
}
...
```



# Common mistakes in React
* <kbd>component</kbd> should start with CAPITAL 'C' <kbd>Component</kbd>

* Don't use <code>=</code> in setState, Use <code>:</code> instead of '='

* missing `return(<div>...</div>)` in render `render(){ (<div>...</div> )}`


* `'Component' is not defined  no-undef` make sure `{ Component }` added here `import React, { Component } from 'react';`

* Use ```this.state={...``` instead of ```state:{...```
```javascript
//Wrong
...
	super(props);
        state : {
            counter: 1
        }
...
```
	
```javascript
//Right
...
	super(props);
        this.state = {
            counter: 1
        }
...
```
<b>Note</b> Also make sure event handler binded in constructor like this -> ```this.myEventHandler = this.myEventHandler.bind(this);```



