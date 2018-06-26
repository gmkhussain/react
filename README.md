# <img src="https://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" style="position: relative; top: 5px;" height="80" /> 

## Get Started with Setup
* Create and open <code>index.html</code> file.
* Create <code>app.js</code> for scripting.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>React</title>
	
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    
  </head>
  <body>
  
    <div id="outputArea"></div>
    
	<script src="app.js" type="text/babel"></script>
	
  </body>
</html>
```


```javascript
//app.js
var what = React.createElement( "h1",  null,  "Hello, world!" );
var where =  document.getElementById("outputArea");

ReactDOM.render( what , where );
```



## Usage of JSX and Babel with React
Recommend using the “Babel” https://babeljs.io/ 

<blockquote>
<b>Important Note:</b> 
JSX is closer to JS than to HTML, use camelCase property naming convention instead of HTML attribute names.
<br/>
For example, class becomes className in JSX, and tabindex becomes tabIndex.
</blockquote>



```html
...
<head>
	<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
	<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
<body>	

	<div id="app"></div>
	<div id="app1"></div>
	
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel">
	var user = {
		name: "Alex Josh",
		avatar: "http://lorempixel.com/400/200/",
		biodata: "lorem bio data info"
	}
	
	var el  = document.getElementById('app');
	var el1 = document.getElementById('app1');
	
	function MyMessage(props){
		return <h2>Hello, {props.name} </h2>
	}
	
	class MyName extends React.Component{
		render(){
			return <div>
				<h2>Hello, {user.name} </h2>
				<p>{user.biodata}</p>
				<img src={user.avatar} />
			</div>
		}
	}
	
	ReactDOM.render(<MyMessage nm="Prefect Web" />, el);
	ReactDOM.render(<MyName nm="Amoos Web" />, el1);
	</script>

</body>
</html>
```



## Updating Rendered Element in React
```javascript
...
<script type="text/babel">
	function myAutoUpdateTime() {
	  const element = (
		<div>
		  <h1>Hello, world!</h1>
		  <h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	  );
	  ReactDOM.render(element, document.getElementById('app'));
	}

	setInterval(myAutoUpdateTime, 1000);
</script>
```



## How to use same component multiple times

we created 'MyMany' component that can renders Message component many times
<b>Note:</b> Use PascalCase for React components, or lowercase for HTML elements, camelCase is incorrect casing.

#### How to add CSS Classes in React component
```javascript
...
<div id="app"></div>
...
<script type="text/babel">
		function Message(props){
			return  <div className={props.clName}>
					Hello, <strong>{props.name}</strong> your id is <mark>{props.uid}</mark>
					</div>;
				
		}
		
		function MyMany() {
		  return (
			<div>
			  <Message name="Alex" uid="44" clName="box box--alex" />
			  <Message name="Eliza" uid="77" clName="box box--eliza" />
			</div>
		  );
		}
	
		ReactDOM.render(
			<MyMany />,
			document.getElementById('app')
		);
</script>
```




## How to use State, setState and Lifecycle method in ReactJS

### componentDidMount()
Execute action immediately after a component is mounted

```
...
<script type="text/babel">
		class Welcome extends React.Component{
			constructor(props){
				super(props)
				this.state = { name: "Alex Josh", age: 28, message:null }
			}
			
			componentDidMount(){
				this.setState(pstate => {
					if(pstate.age >=25){
						return {message: "over 25 !", age: 222 }
					}else{
						return {message: "under 25 !" }
					}
				});
			
				/*
				if (this.props.age >= 25){
					this.setState({ message: "under 25 !" });
				}else{
					this.setState({ message: "over 25 !" });
				}
				*/
			}
			
			render(){
				return <div>
					<h2>{this.state.name}</h2>
					<p>{this.state.age}</p>
					<p>{this.state.message}</p>
				</div>
			}
			
		}
		
		ReactDOM.render(<Welcome />, document.getElementById('app'));
		
	</script>
...
```







## How to use Binding with Events in React

Bind with <b>constructor</b> 
```javascript
constructor(props){
	//...
	this.alertMessage = this.alertMessage.bind(this);
	//...
}
```

Bind with Button in Render
```html
<button onClick={ this.alertMessage.bind(this) } >
```

Use Arrow Function in Render
```javascript
	onClick={e => this.handleChange(e)}
```


Use Arrow Function in Class Property
```javascript
alertMessage = () => {
  // call this function from render 
  // and this.whatever in here works fine.
};
```





## How to passing data from constructor in Function // How to use Props in Alert

```javascript

	...
	alertMessage (){
		
		alert(this.props.school); /* alert specific props eg. 'school' */
		alert('props: ' + JSON.stringify(this.props)); /* alert all props in JSON*/
		
		alert(this.state.age); /* alert varible from  constructor props */
	}
	...
	
	ReactDOM.render(<Welcome school="ABC School" grade="A" />, document.getElementById('app'));

```




## How to add custom HTML attributes in React / JSX

```javascript
//...
	alertMessage (cEvent){
		console.log(cEvent);  /*display all event in console*/
		console.log(cEvent.target.getAttribute('customAttribute')); /*display attribute value */
	}
//...
			render(){
				return <div>
//..
					<button customAttribute="My Custom Event Message" onClick={this.alertMessage.bind(this) } >Click Me</button>
				</div>
			}
//...

```




## Event listener base on condition in React

Note: <b>componentDidMount()</b> execute one time only when load component

```javascript
	<script type="text/babel">
		class Welcome extends React.Component{
			constructor(props){
				super(props)
				this.state = { name: "Alex Josh", age: 28, message:null }
				 // This binding is necessary to make `this` work in the callback
				this.upEvent = this.upEvent.bind(this);
				this.downEvent = this.downEvent.bind(this);
			}
			
			componentDidMount(){
				/*componentDidMount() execute one time only when load component*/
				this.checkAge(this.state.age);
			}
			
			
			checkAge(age){
				if(age >=25){
						this.setState({message: "over 25 !" })
				}else{
						this.setState({
						message: "under 25 !" ,
						
						})
				}			
			}
			
			
			upEvent(e){
				const ageState = parseInt(this.state.age)+1;
				this.setState({age: ageState});
				this.checkAge(ageState);
			}
			
			downEvent(e){
				const ageState = parseInt(this.state.age)-1;
				this.setState({age: ageState});
				this.checkAge(ageState);
			}
  
			render(){
				return <div className={"info-area " + (this.state.age >= 25 ? 'overAge' : 'underAge')}>
					<h2 >{this.state.name}</h2>
					<p>{this.state.age}</p>
					<p>{this.state.message}</p>
					<button onClick={this.upEvent}>Up</button>
					<button onClick={this.downEvent}>Down</button>
				</div>
			}
			
		}
		
		ReactDOM.render(<Welcome />, document.getElementById('app'));
		
	</script>
```





## Conditionally applying class attributes in React

```javascript
//Approach 1:
<div className={"info-area " + (this.state.age >= 25 ? 'overAge' : 'underAge')}>

//Approach 2: This approach allows you to do neat things like that, rendering either is-overAge or is-underAge
<div className={`info-area is-${this.state.age >=25 ? 'overAge' : 'underAge'}`}>
```
