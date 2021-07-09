import React from "react";

const SlotM = (props) => {
    
    let x = props.x;
    let y = props.y;
    let z = props.z;
    
    if( (x===y) && (y===z) ) {
        return (
            <>
                <div> {x} {y} {z} </div>
                <h4>Matched</h4>
            </>
        )
    } else {
        return (
            <>
                <h4>Not Matched</h4>
            </>
        )
    }
}


export default SlotM;