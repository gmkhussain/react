import React from 'react'

function E23Array(props) {
    
    const myStyle = {
        color: 'white',
        fontSize: 14,
        float: 'left',
        width: '20%'
    };

    return  <>
                <div className="card" style={myStyle}>
                    <img src={props.image || "https://picsum.photos/50" } alt="" />
                    <h4> {props.head || "default head" } </h4>
                    <p> {props.content || "default content " } </p>
                </div>
            </>
}

export default E23Array;