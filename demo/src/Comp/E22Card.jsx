import React from 'react'

function E22Card(props) {
    
    const myStyle = {
        color: 'white',
        fontSize: 14,
        float: 'left',
        width: '20%'
    };

    return  <>
                <div className="card" style={myStyle}>
                    <h2>{props.idx || "Index" }</h2>
                    <img src={props.image || "https://picsum.photos/50" } alt={props.idx} />
                    <h4> {props.head || "default head" } </h4>
                    <p> {props.content || "default content " } </p>
                </div>
            </>
}

export default E22Card;