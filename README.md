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





### How to use radio buttons in ReactJS
```
...
    constructor(props){
        super(props);
...
            devtype:{
                MEANStack: false,
                MERNStack: true,
                LAMPStack: false
            }
        }
...
	this.radioHandler = this.radioHandler.bind(this);
...
    }


...

    radioHandler(event){
        console.log(event.target.value);
        let devtype = this.devtype; 
        
        for (var key in devtype){
            devtype[key] = false /* reset previous values */
        }

        devtype[event.target.value] = event.target.checked
        // this.setState({ devtype: event.target.value })
        this.setState({
            devtype: devtype
        })
    }


    render(){
        return(
            <div>
              ...

                <h4>Developer Category</h4>
              
                <label>
                    MEAN Stack <input type="radio" name="devcat" value="MEANStack" checked={this.state.devtype['MEANStack']} onChange={this.radioHandler} />
                </label>
                <br/>
                <label>
                    MERN Stack <input type="radio" name="devcat" value="MERNStack" checked={this.state.devtype['MERNStack']} onChange={this.radioHandler} />
                </label>
                <br/>
                <label>
                    LAMP Stack <input type="radio" name="devcat" value="LAMPStack" checked={this.state.devtype['LAMPStack']} onChange={this.radioHandler} />
                </label>

            </div>
        )
    }
}

export default MyForm;
```







## How to use checkbox buttons in ReactJS

```javascript
...
    constructor(props){
        super(props);
        
        this.state={
...
            techtype: {
                mongodb: false,
                react: false,
                express: true,
                node: false
            }
        }

...
        this.techHandler = this.techHandler.bind(this);
    }

...

    techHandler(event){
        let tech = this.state.techtype;
        tech[event.target.value] = event.target.checked;
        this.setState({
            techtype: tech
        })
    }


    render(){
        return(
            <div>
...
            <h4>Technogies</h4>
              <label>
                  MongoDB <input type="checkbox" name="tech" value="mongodb" checked={this.state.techtype['mongodb']} onChange={this.techHandler} />
              </label>
              <br/>
              <label>
                Express <input type="checkbox" name="tech" value="express" checked={this.state.techtype['express']} onChange={this.techHandler} />
              </label>
              <br/>
              <label>
                ReactJS <input type="checkbox" name="tech" value="react" checked={this.state.techtype['react']} onChange={this.techHandler} />
              </label>
              
              <label>
                NodeJS <input type="checkbox" name="tech" value="node" checked={this.state.techtype['node']} onChange={this.techHandler} />
              </label>

            </div>
        )
    }
}
export default MyForm;
```






## How to use select buttons in ReactJS
```javascript
...
    constructor(props){
        super(props);
        
        this.state={
		...
            selectValue: ''
        }
		...
        this.selectHandler = this.selectHandler.bind(this);
    }


    selectHandler(event){
        this.setState({
            selectValue: event.target.value
        })   
    }


    render(){
        return(
            <div>
                ...

                <h4>Select Favourate Language</h4>

                <select value={this.state.selectValue} onChange={this.selectHandler}>
                    <option>Ruby</option>
                    <option>PHP</option>
                    <option>ASP .NET</option>
                </select>
                {this.state.selectValue}

            </div>
        )
    }
}

export default MyForm;
```



## Refs in React: NOT recommended is Uncontrolled

```javascript
import React, { Component } from 'react';

class MyForm extends Component{

    constructor(props){
        super(props);
        
        this.state={
            useremail: ''
        }

        this.emailHandler = this.emailHandler.bind(this);
    }


    emailHandler(){
        console.log(this.refs.userEmail.value); //<-- Ref NOT recommended is Uncontrolled
    }


    render(){
        return(
            <div>
                <input type="email" ref="userEmail" />
                <button onClick={this.emailHandler}>Submit</button>
            </div>
        )
    }
}

export default MyForm;
```







# <img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" height="80" /> React Route: One Router to Rule Them All

### Install React route
Open command line and type <kbd>npm install --save react-router-dom</kbd>


1. Create ```src/Routes.js``` file
```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about'; // <-- about.js imported form '/about' route 

const MyRoutes = () =>(
    <Router>
        <div>
            <Route exact path='/' component={App} /> // <-- 'exact' using to avoid conflict
            <Route path='/about' component={AboutPage} />
        </div>
    </Router>
)

export default MyRoutes;
```



2. Create inner page ```src/layout/about.js```

```javascript
import React, { Component } from 'react';

class AboutPage extends Component{
	render(){
		return(
            <div>
                <h2>About Page</h2>
            </div>
        )
	}
}

export default AboutPage;
```




3. Modify ```src/index.js```

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import MyRoutes from './Routes.js'; //<-- Routes file

ReactDOM.render(
	<div>
		<MyRoutes /> //<-- Routes.js component will load here
	</div>
, document.getElementById('root'));
//registerServiceWorker();
```





## Basic Navigation components in ReactJS Router


1. Create '.layout/navbar.js' file
```javascript
import React from 'react';
import { Link } from 'react-router-dom'; //<-- Just import 'Link' only as we need

const Navbar = () => (
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
    </ul>
)

export default Navbar;
```


2. Modify ```Routes.js```

```javascript
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about';
import Navbar from './layout/navbar';

const MyRoutes = () =>(
    <Router>
        <div>
            <Navbar /> //<-- Added navigation here
            <hr />
            <Route exact path='/' component={App} />
            <Route path='/about' component={AboutPage} />
        </div>
    </Router>
)

export default MyRoutes;
```






## Navigation with password function

1. Create ```layout/login.js```

```javascript
import React, { Component } from 'react';

class LoginPage extends Component{

    constructor(props){
        super(props)
        this.state={
            pass:''
        }
        this.eventHandler = this.eventHandler.bind(this);
    }

    loginHandler(event){

        this.setState({
            pass: event.target.value
        })

        var passCheck = this.state.pass; //<-- storing updated password in var

        if(passCheck === "mypass"){
            this.props.history.push('/'); //<-- .push('your-next-url')
        }else{
            alert(passCheck+ " please try agian!");
        }
    }

    eventHandler(event){
        this.setState({
            pass: event.target.value
        })
    }

	render(){
		return(
            <div>
                <h2>Login Page</h2>
                <input type="text" name="pass" value={this.state.pass} onChange={this.eventHandler} />
                <button onClick={this.loginHandler.bind(this)}>Login</button>
                
                <p>Correct password: 'mypass'</p>
            </div>
        )
	}
}

export default LoginPage;
```



2. Modify ```Route.js```
```javascript
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about'; 
import LoginPage from './layout/login';  //<-- Login imported here
import Navbar from './layout/navbar';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory(); //<-- creating History

const MyRoutes = () =>(
    <Router histor={customHistory}> //<-- history called on Router
        <div>
            <Navbar />
            
            <hr />

            <Route exact path='/' component={App} />
            <Route path='/about' component={AboutPage} />
            <Route path='/login' component={LoginPage} /> //<-- Added Login Route here
        </div>
    </Router>
)

export default MyRoutes;
```







3. Add login link in ```navbar.js```
```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    
    <ul>
		...
		<li><Link to='login'>Login</Link></li>
    </ul>
   
)

export default Navbar;
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



### TypeError: Cannot set property 'YourValue' of undefined

```this.myStateVarible;``` DONT forget to use <kbd>.state</kbd> before your state varible  ```this.state.myStateVarible;```



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


*

```javascript
//WRONG
    radioHandler(){
	this.setState({
		devtype: this.setState.target.value
	})
	console.log(this.state.devtype);
}
```

```javascript
//RIGTH
radioHandler(event){
    console.log(event.target.value);
    let devtype = this.devtype; 
        
    for (var key in devtype){
		devtype[key] = false /* reset previous values */
	}
	devtype[event.target.value] = event.target.checked;
}
```



* Don't use ```Return(...)`` inside Routing Arrow function in ReactJS
//WRONG
```
const Navbar = () =>{ //<--DONT use curly brackets
    return( //<--DONT add return() here

    )
} 
```

//Right
<b>Note:</b> use round brackets ```const Navbar = () => (...)``` instead of curly brackets ```const Navbar = () => {...}```
```
const Navbar = () =>(
 <ul>
	<li><Link to="your-link">Your Text</Link></li>
 </ul>
)
```