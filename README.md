<h1 align="center">
<img src="https://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" style="position: relative; top: 5px;" height="80" /> 
</h1>



<table>
<tr>
<td>
	<a href="#ChartsJS">
	<img src="example/public/assets/images/chartsjs.png" style="position: relative; top: 5px;" height="80" />
	<br/>ChartsJS</a>
</td>
<td>
	<a href="#Route">
	<img src="example/public/assets/images/react-route.png" height="40" width="auto" />
	<br/> Route </a>
</td>
<td>
	<a href="#Redux">
	<img src="example/public/assets/images/redux.png" height="40" width="auto"  />
	<br/> Redux </a>
</td>
<td>
	<a href="#yaml">
	<img src="example/public/assets/images/yaml.png" height="40" width="auto"  />
	<br/> YAML </a>
</td>
<td>
	<a href="#yarn">
	<img src="example/public/assets/images/yarn.png" height="40" width="auto"  /></a>
</td>
<td>
	<a href="#errors">
	<img src="example/public/assets/images/errors.png" height="40" width="auto"  />
	<br/> Errors </a>
</td>
<td>
	<a href="#ESLint">
	<img src="example/public/assets/images/eslint.png" height="40" width="auto"  />
	<br/> ESLint </a>
<br/>
ESLint
</td>
<td>
	<a href="#StyledComponents">
	<img src="example/public/assets/images/styled-components.png" height="40" width="auto"  /></a>
	<br/>StyledComponents</td>
</tr>
</table>



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






<h1 align="center">
<img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" height="80" />
<br/>
React Route: One Router to Rule Them All
</h1>

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




### How to get data according to parameter value from URL with React Router
Warning: <BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.



##### Routes.js
```javascript
import React from 'react';
import { Router, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about';
import LoginPage from './layout/login';
import Navbar from './layout/navbar';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

const MyRoutes = () =>(
    <Router history={customHistory}>
        <div>
            <Navbar />
            
            <hr />

            <Route exact path='/' component={App} />
            <Route path='/about/:userid' component={AboutPage} />  {/*<-- userid passed in url */ }
            <Route path='/login' component={LoginPage} />
        </div>
    </Router>
)

export default MyRoutes;
```






##### About.js
```javascript
//About.js
import React, { Component } from 'react';


class AboutPage extends Component{


	render(){

        /*User records in JSON format*/
        let users = {
            157:{
                name: "Amoos",
                cell: "124545"
            },
            158:{
                name: "Ebad",
                cell: "457587"
            },
            159:{
                name: "Hussain",
                cell: "59859"
            }
        }

        let requiredUser  = users[this.props.match.params.userid] //<-- sorting params to 'requiredUser' varible
        

		return(
            <div>
                <h2>About Page</h2>
               User ID: {this.props.match.params.userid} *by normal syntax
               <br/>
               User Name: {requiredUser.name} *by sorting into variable
               <br/>
               User Cell: {requiredUser.cell} *by sorting into variable
            </div>
        )
	}
}

export default AboutPage;
```


##### Login.js
```javascript
//Login.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            this.props.history.push('/about/157'); //<-- .push('your-next-url')
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
                
                <ul>
                    <li><Link to='/about/158'>About with 158 UserID</Link></li>
                    <li><Link to='/about/159'>About with 159 UserID</Link></li>
                 </ul>
            
            </div>
        )
	}
}

export default LoginPage;
```


### Creating 404 Page with React Router

1. Create ```layout/notfounde.js```
```javascript
import React, { Component } from 'react';

class NotFoundPage extends Component{

	render(){
		return(
            <div>
                <h2>NOT FOUND</h2>
            </div>
        )
	}
}

export default NotFoundPage;
```


2. Modify ```Routes.js```

```javascript
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; //<-- add <Switch> here
import App from './App';
import AboutPage from './layout/about';
import LoginPage from './layout/login';
import NotFoundPage from './layout/notfound'; //<-- Not found page
import Navbar from './layout/navbar';
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

const MyRoutes = () =>(
    <Router history={customHistory}>
        <div>
            
            <Navbar />
            
            <hr />
            <Switch>
				<Route exact path='/' component={App} />
				<Route path='/about/:userid' component={AboutPage} /> {/*<-- userid passed in url */ }
				<Route path='/login' component={LoginPage} />
				<Route component={NotFoundPage} /> {/* not found url */}
            </Switch>
        </div>
    </Router>
)

export default MyRoutes;
```
<b>Note:</b> Wrap all Routes inside of a ```Switch``` only the first match will ever be rendered.
Dont forget to use ```Switch``` NotFound component no matter what path we’re on, because the Route has no path, and if it has no path, it will always be rendered...




### Redirecting old URL to new URL in ReactJS

```javascript
...
import { Router, Route, Switch, Redirect } from 'react-router-dom';
...
const MyRoutes = () =>(
    <Router history={customHistory}>
        <div>
            <Navbar />
            <hr />
            <Switch>
				...
				<Redirect from="/old-url" to="/new-url" />
				<Redirect from="/about-us" to="/about" />
				<Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)
export default MyRoutes;
```






### How to addClass / toggleClass on click in ReactJS

Add ClassName module

```yarn add classnames --save``` OR ```npm install classnames --save```


Code this where you want.
```javascript
var btn = getClassNames() {
    return classNames({
        'is-active':  this.state.clicked,
        'is-inactive':  !this.state.clicked
    });
},
render () {
    return <button className={this.getClassNames()} onClick={this.setState({clicked: !this.state.clicked})>
}
```









<h1 align="center" id="ChartsJS">
<img src="https://avatars0.githubusercontent.com/u/10342521?s=280&v=4" style="position: relative; top: 5px;" height="80" />
<br/>
ChartsJS
</h1>


```
npm install react-chartjs-2 chart.js --save
```


Usage:
```javascript
import { defaults } from 'react-chartjs-2';

defaults.global.animation = false; // Disable animating charts by default.

<Bar
	data={data}
	width={100}
	height={50}
	options={{
		maintainAspectRatio: false
	}}
/>
```






















<h1 align="center">
<img src="https://kyleshevlin.com/wp-content/uploads/2016/11/redux_logo_2.png" style="position: relative; top: 5px;" height="80" />
</h1>

### Setting Up Redux with React

1. Add follwing package on ```package.json``` file
```javascript
// package.json
{
	name:"..."
	...
	"dependencies": {
		...
		"react-redux": "^5.0.6",
		"react-router-redux": "^5.0.0-alpha.9",
		"redux": "^3.7.2",
		"redux-logger": "^3.0.6",
		"redux-thunk": "^2.2.0"
		...
  },
  ...
}
```

2. Open command line type ```npm install```


For Only react-redux <kbd>npm install --save react-redux</kbd>



#### redux-logger
Logger for Redux. ... Log only in development; Log everything except actions with certain type ... ```import { createLogger } from 'redux-logger'```

#### redux-thunk ( Middleware )
An action creator that returns a function to perform asynchronous dispatch.



### How to access one component's state from another component with Redux

```javascript
               _One Component
App Component /
              \_Aonther Component
```



1. Create spearte file for history ```History.js```

```javascript
//History.js
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

export default customHistory;
```



2. Import into ```Routes.js```
```javascript
// Routes.js
...
import history from "./History";
...
```



3. Create following file/folder for redux functions

```javascript
//store/index.js
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //<-- for action dispatch
import allReducers from './reducer';


const store = createStore(
    allReducers,
    {},
    applyMiddleware(thunk)
)

export default store;
```



```javascript
//store/reducer/index.js
import my_reducer from './reducer';

import { combineReducers } from 'redux';

export default combineReducers({
    rootReducer: my_reducer
})

```


```javascript
//store/reducer/my_reducer.js
const INITIAL_STATE = {
    userName: 'Alex Josh'
}
//static data for now

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        default:
            return state;  
    }
}
```



4. Modify ```index.js```
<b>Note</b> After import react-redux and store make <Provider> parent for <MyRoutes>.
```javascript
...
import {Provider} from "react-redux"; //<-- Added
import store from './store'; //<-- Added

ReactDOM.render(
	<div>
		<Provider store={store}> //<-- Added
			<MyRoutes />
		</Provider> //<-- Added
	</div>
, document.getElementById('root'));

```


5. Access and diplay data from Redux store
Code. ```{this.props.userName}```

```javascript
//About.js
import React, { Component } from 'react';
import { connect } from "react-redux"; //<-- Added

class AboutPage extends Component{

	render(){
		...
		return(
            <div>
                <h2>About Page {this.props.userName} </h2>
               ...
            </div>
        )
	}
}


/**redux**/
function mapStateToProps(state){
    return({
        userName: state.rootReducer.userName
    })
}


function mapDispatchToProps(dispatch){
    return({ })
}
/**./redux**/

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

```




### Redux updating state on button click

1. Modify ```about.js```
```javascript
//about.js
import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeState } from '../store/action/action'; //<-- added

class AboutPage extends Component{

    _changeState(){
        this.props.changeStateToReducer()
    }

	render(){
        ...
		return(
            <div>
                <h2>About Page {this.props.userName} </h2>

                <button onClick={this._changeState.bind(this)}>Change Redux State</button>
				...
            </div>
        )
	}
}


/**redux**/
function mapStateToProps(state){
    return({
        userName: state.rootReducer.userName
    })
}


function mapDispatchToProps(dispatch){
    return({
        changeStateToReducer: ()=>{ /* custom name */
            dispatch(changeState()); //<-- changeState from <action.js> || usage: this.props.changeStateToReducer()
        }
     })
}
/**./redux**/

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

```

2. Modify ```my_reducer.js```
```javascript
//reducer/my_reducer.js
const INITIAL_STATE = {
    userName: 'Alex Josh',
    rollNumber: '157'
}


export default (states = INITIAL_STATE, action)=>{
    switch(action.type){

        case 'CHANGEUSERNAME':
            return ({
                ...states,
                userName: action.payload
            })

        default:
            return states;  
    }
}
```


3. Create ```action/action.js``` file
```javascript
export function changeState(){
    return dispatch =>{
        //console.log("from action..");
        dispatch({type:'CHANGEUSERNAME', payload: 'New Name'}) /*payload = new or updated state data*/
    }
}
```




<h1 align="center">
<img src="https://avatars2.githubusercontent.com/u/69535?s=200&v=4"  height="80" width="auto" />
</h1>


### YAML data fetch in ReactJS

Create new file for fetch API data

```javascript
//data_fetch.js
import React, { Component } from 'react';
import yaml from 'js-yaml';
import $ from 'jquery';


class DataFetchPage extends Component{

    constructor(props){
        super(props)
        this.state={
            demo_var: "dummy text"
        }
    }


    render(){
        $.get( 'https://raw.githubusercontent.com/nodeca/js-yaml/2d1fbed8f3a76ff93cccb9a8a418b4c4a482d3d9/examples/sample_document.yml', function( data2 ) {
            var data = yaml.load( data2 );
            console.log( data.timestamp ); //
        });

        return(
            <div>
                {this.state.demo_var}
            </div>
        )
    }


}

export default DataFetchPage;

```


2. Modify Routes.js

```javascript
//Routes.js
// ...
import DataFetchPage from './layout/data_fetch';
// ...

<Switch>
	//...
	<Route path='/data_fetch' component={DataFetchPage} />
	//...
</Switch>
//...

```


3. Modify Navbar.js
```javascript
//Navbar.js
// ...
    <li><Link to='/data_fetch'>Data Fetch (API)</Link></li>
// ...
```

NOTE: see result in console.







### JSON data fetch from local file in ReactJS


```javascript
import React, { Component } from 'react';
import yaml from 'js-yaml';
import $ from 'jquery';

import jdata from '../_data/data.json';

class DataFetchPage extends Component{

    constructor(props){
        super(props)
        this.state={
            demo_var: "dummy text",
        }
    }


    componentDidMount() {
        console.log("Data loaded :" +jdata[1].title);
    }
 
        
    render(){

        const listJsonData = jdata.map(
            (d) =>
            <div key={d.id}>
                <span>{d.id} - </span>
                <span>{d.title}</span>
            </div>
        );


        return(
            <div>
				{listJsonData}
                {this.state.demo_var}
            </div>
        )
    }
}

export default DataFetchPage;
```


























<h1 align="center">
	<img src="https://pbs.twimg.com/media/CqE7bg7UsAA6HsA.jpg" height="240px" ><br/>
	Airbnb react-dates
</h1>



### :date: How to Add Date Ranger Picker in ReactJS 
1. ``` yarn add react-dates ```


2. An example for date range component file code
```javascript
// DatePicker.jsx
/*eslint-disable */
import React, { Component } from 'react'
import {SingleDatePicker} from 'react-dates';

import 'react-dates/initialize';

class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.state ={
          date: null,
          focused: null
        }
      }

  render() {
    return (<div>
    Date Picker
    
    <SingleDatePicker
                          // showClearDate={true}
                          customInputIcon={
                            <svg className="icon icon-small">
                              
                            </svg>
                          }
                          inputIconPosition="after"
                          small={true}
                          block={false}
                          numberOfMonths={1}
                          date={this.state.date}
                          onDateChange={date => this.handleDateChange(date)}
                          focused={this.state.focused}
                          onFocusChange={({ focused }) =>
                            this.setState({ focused })
                          }
                          openDirection="up"
                          hideKeyboardShortcutsPanel={true}
                        />
		</div>)
  }
}

export default DatePicker

```


3. Add component where you want.

```javascript
// ...
import DatePicker from '../DatePicker';
// ...


render() {
    return (<CalenderBarWrapper>
    			<DatePicker />
				// ...
```




### :bug: Cannot read property 'createLTR' of undefined // react-dates ( Date Range Picker )
Add below code at the beginning of your application, It worked for me
```javascript
import 'react-dates/initialize';
```






### :bug: DateRangePicker CSS not rendering correctly <react-dates>
- configuration.module has an unknown property 'loaders'. These properties are valid:

1. webpack config problem... there was no css loader in the config.

Still not working... ???

```yarn add css-loader --save-dev```

#### configuration.module has an unknown property 'loaders'
and add following rules in webpack config.

```javascript
 module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
	// ...
```




































<h1 align="center">
	<img src="https://cdn-images-1.medium.com/max/1600/1*_Hf-_m-JWnK2mj-G4IJ-bw.png"  height="80" width="auto" /> <br/>
	ESLint
</h1>


### linebreak-style: Expected linebreaks to be 'CRLF' but found 'LF'

Open `package.json`, added following rules under rules line:

```javascript
"rules": {
  "linebreak-style": 0,
  "global-require": 0,
  ...
``` 

for VScode users: click the option at the bottom-right of the window and set it to `LF` from `CRLF`
errors will fixed for me




### Visible, non-interactive elements with click handlers must have at least one keyboard listener.
<div onClick={() => {}} onKeyPress={this.handleKeyPress} />



### Static HTML elements with event handlers require a role. (jsx-a11y/no-static-element-interactions)
```javascript
// RIGHT
<button onClick={() => {}} className="foo" />
<div className="foo" onClick={() => {}} role="button" />
<input type="text" onClick={() => {}} />
```

```
//WRONG
<div onClick={() => {}} />
```


### Elements with the 'button' interactive role must be focusable

```javascript
<div
  role="button"
  tabIndex={0} />
```



### :bug: ` must be placed on a new line  react/jsx-one-expression-per-line

```javascript
// WRONG
  <span>
My Text
  </span>
```

```javascript
// Right * Strings must use singlequote quotes
  <span>
    {'My Text'}
  </span>
```



















<h1 align="center">
  <img src="http://whyinterviewdave.com/images/styled-components.png" width="80">
  <br>
  :lipstick: Styled Components
  <br>
</h1>

```npm install --save styled-components.```


#### Module not found: Can't resolve 'style'

``` npm install style-loader --save-dev ```



#### How to Injecting styles in body without global style
```css
body:not(&) { overflow: hidden; }
```


<h1 align="center">
<img src="https://ih0.redbubble.net/image.395434023.9542/flat,550x550,075,f.jpg" style="position: relative; top: 5px;" height="80" /> 
</h1>


### Starting a new project

```javascript
yarn init
```

### Installing all the dependencies of project

```javascript
yarn install
```


### 'rimraf' is not recognized as an internal or external command 

rimraf is the UNIX command rm -rf for node, need to install it with
```javascript
npm install rimraf -g.
```

### cross-env NODE_ENV=development node server Fails
'cross-env' is not recognized as an internal or external command,

install cross-env with npm

```javascript
npm install cross-env
```































<h1 align="center">
<img src="https://cdn.iconscout.com/icon/free/png-256/warning-272-830593.png"  height="80" width="auto" />
</h1>

# Errors, Issues & Common mistakes in React

### match.params returns empty even when URL contains params 
<b>Note:</b> make sure you have added params in ```routes.js```

```javascript
import React from 'react';
import { Router, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './layout/about';
...
import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

const MyRoutes = () =>(
    <Router history={customHistory}>
        <div>
			...
            <Route path='/about/:userid' component={AboutPage} />
        </div>
    </Router>
)
export default MyRoutes;
```


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




### jQuery in React / $ is not defined in ReactJS
open commandline and install jQuery
```npm i jquery --save```

import jquery file where you need

```javascript
// file_name.js
// ...
	import $ from 'jquery';
// ...
```







### :bug: npm run build does not work

#### Cannot find module 'webpack/lib/Chunk' 

UPDATE: Installing a previous version of Webpack solved the issue.
```npm install webpack@2.2.0 --save-dev```

#### npm WARN npm npm does not support Node.js v10.10.0
Solution: Run ```npm upgrade```

#### "react-scripts build" gives webpack error: "Chunk.entrypoints: Use Chunks.addGroup instead"

After running ```npm install -D extract-text-webpack-plugin@next``` solved this issue for me.





# Common mistakes in React
* <kbd>component</kbd> should start with CAPITAL 'C' <kbd>Component</kbd>

* Don't use <code>=</code> in setState, Use <code>:</code> instead of '='

* Missing `return(<div>...</div>)` in render `render(){ (<div>...</div> )}`


* `'Component' is not defined  no-undef` make sure `{ Component }` added here `import React, { Component } from 'react';`

* Use ```this.state={...``` instead of ```state:{...```

```javascript
// Wrong
...
	super(props);
        state : {
            counter: 1
        }
...
```


```javascript
// Wrong 2.0 : forget to use 'this.state'
constructor(props){
		super(props)
		demovar: "dummy text"
}
```


	
```javascript
// Right
...
	super(props);
        this.state = {
            counter: 1
        }
...
```

<b>Note</b> Also make sure event handler binded in constructor like this -> ```this.myEventHandler = this.myEventHandler.bind(this);```


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



* Don't use ```Return(...)``` inside Routing Arrow function in ReactJS

```javascript
//WRONG	
const Navbar = () =>{ //<--DONT use curly brackets
    return( //<--DONT add return() here

    )
} 
```


<b>Note:</b> use round brackets ```const Navbar = () => (...)``` instead of curly brackets ```const Navbar = () => {...}```..

```javascript
//RIGHT
const Navbar = () =>(
 <ul>
	<li><Link to="your-link">Your Text</Link></li>
 </ul>
)
```


### Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
```javascript
//WRONG
export function changeState(){
    console.log("from action..");
}
```

```javascript
//RIGHT
export function changeState(){
	return dispatch =>{
		console.log("from action..");
	}
}
```



### TypeError: __WEBPACK_IMPORTED_MODULE_0_react___default(...) is not a function

```javascript
// Wrong
class D3Map extends React(){
	// ...
}
```


```javascript
// Right
class D3Map extends Component{
	// 	...
}

```



### Syntax error: src/containers/Chartsjs/index.js: Unexpected token, expected ;
```javascript
// WRONG
export default from './Chartsjs'
```
 
```javascript
// Right
export { default } from './Chartsjs'
```











### ReferenceError: Unknown plugin "inline-react-svg" specified in
```
yarn add babel-plugin-inline-react-svg --save-dev
yarn add babel-plugin-transform-replace-object-assign
yarn add babel-preset-airbnb --save-dev
```



### error building - Unknown plugin "add-module-exports"
```yarn add babel-plugin-add-module-exports```




### [undefined] Unexpected token const... // ESLint
enable blockBindings in your .eslintrc file:
```javascript
// ...
    "ecmaFeatures": {
        "blockBindings": true
    },
// ...
```

















# DevTools

#### Redux DevTools
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

#### Ract Develoepr DevTools
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en











# FAQ

#### Why should redux action types be in UPPER_CASE?
It's naming convention which is common also in other other languages.
Mainly because of actions is being refereed from multiple modules, Easy readability in code, Actions are important focus as they are meant to change the state of the ReactUI.

```javascript
const ActionsExample = {
  LOAD_POSTS_REQUEST: 'LOAD_POSTS_REQUEST',
  LOAD_POSTS_FAILURE: 'LOAD_POSTS_FAILURE',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
};
```


#### Difference between Functional Component and Class Component ?

Functional Component 
* Used for presenting static data 
* Can't handle fetching data 
* Easy to write

```javascript
const Header = () => { 
	return < Text>Hello Amoos!</Text> 
}
```


Class Component 
* Used for dynamic sources of data 
* Handles any data that might change (fetching data, user events, etc) 
* Knows when it gets erendered to the 
* device (useful for data fetching) 
* More code to write

```javascript
class Header extends Component { 
	render() { 
		return < Text>Hello Amoos!</Text> 
	}
}
```