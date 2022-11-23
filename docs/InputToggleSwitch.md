#### App.js 
```js
import { useState } from 'react';
//...
const [toggleSwitch, setToggleSwitch] = useState( false );
//...

    Checked : {toggleSwitch ? "True" : "False "}

    <InputToggleSwitch
        toggleSwitch={toggleSwitch}
        setToggleSwitch={setToggleSwitch} 
        beforeText="Before"
        afterText="After"
        />
```



#### InputToggleSwitch.js
```js
export const InputToggleSwitch = (props) => {
    
    const { beforeText, afterText, toggleSwitch, setToggleSwitch=()=>{} } = props

    return (<>
        <div className="d-flex">
            <span>{beforeText}</span>
            <span>
                <input type="checkbox"
                    name="toggleName"
                    onChange={ ()=>{setToggleSwitch( !toggleSwitch ); } }
                    checked={toggleSwitch} />
            </span>
            <span>{afterText}</span>
        </div>    
    </>)
}
```

