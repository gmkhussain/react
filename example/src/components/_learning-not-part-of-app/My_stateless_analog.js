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