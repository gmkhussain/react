import React from "react";
import SlotM from "./slot"



 function get_random (list) {
     let num = [1,2,3];
     let res = num[Math.floor((Math.random()*num.length))];
     console.log(res)
     return res;
 }

// console.log(get_random([2,3,5]))

 const E38SlotMachine = (props) => {
    return(
        <>
            <SlotM x="f" y="f" z="f" />
            <button onClick={get_random}>Button1</button>
        </>
    )
 }

export default E38SlotMachine;
