import React from "react";

function E17ifElse () {
        
    let currDate = new Date(2020, 5, 5, 20);
    let currTime = currDate.getHours();

    //#1 normal
    if( currTime <=1 && currTime >= 12 ) {
        currTime = " Morning"
    } else {
        currTime = " Night"
    }
    

    //#2 Ternary Opertor    
    (currTime <=1 && currTime >= 12 ) ? currTime = " Morning.." : currTime = " Night.."
    
    return <>
            Welcome, Good {currTime}
           </>
}

export default E17ifElse;