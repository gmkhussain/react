#### App.js
```js
import { useApi } from "./useApi"

function App() {
    
  const { isLoading, data } = useApi(
    "https://jsonplaceholder.typicode.com/users", true
  );
  
  return (
    <div className="App">
        { isLoading ? "Loading..." : 
          JSON.stringify(data)
        }
    </div>
  );
}

export default App;
```



### useApi.js
```js
import { useEffect, useState } from "react";

export const useApi = (url, consoleLog=true) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if(consoleLog) console.log(json);
        setIsLoading(false);
        setData(json);
      }).catch((err)=> {
        if(consoleLog) console.warn("err", err);
        setData(`Error, ${err}`);
        return `Error, ${err}`;
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { isLoading, data };
};
```
