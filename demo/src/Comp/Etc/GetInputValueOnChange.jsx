import React, { useState  } from 'react';

function GetInputValueOnChange(props) {
   
    const [inputs, setInputs] = useState({
        input1: '',
        input2: '',
    }); 
    
    // '' is the initial state value
    // let getInputValue = (e) => {
    //     console.log( e.target.id )
    //     if( e.target.id == "ip1") {
    //         setInput({"input1": e.target.value });
    //     } else {
    //         setInput({"input2": e.target.value });
    //     }
    // }

    let getInputVal = ( target ) => {
        console.log( target )
        setInputs({ input1:target.value});
    }

    
    return <>
            <div>
                <label>Get the value of an input field on Change</label> 
                
                {/* <h4>{inputs.input1}</h4>
                <input id="ip1" type="range" value={inputs.input1} onChange={e => setInput({'input1': e.target.value}) } /> 

                <h4>{inputs.input2}</h4>
                <input id="ip2" type="text" value={inputs.input2} onChange={e => setInput({'input2': e.target.value })}  />  */}

                <h4>{inputs.input1}</h4>
                <input key="input1" name="input1" onChange={ getInputVal } value={inputs.input1}/>
                
                <h4>{inputs.input2}</h4>
                <input key="input2" name="input2" onChange={({target}) => setInputs(state => ({...state,input2:target.value}))} value={inputs.input2}/>
    

            </div>
        </> 

}

export default GetInputValueOnChange;