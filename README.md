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