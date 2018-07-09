# <img src="https://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png" style="position: relative; top: 5px;" height="80" /> 


## Get Started with ReactJS CLI

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