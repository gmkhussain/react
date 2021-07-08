import React from 'react'

function E22Card(props) {
    return  <>
                <h4> {props.head || "default head" } </h4>
                <p> {props.content || "default content " } </p>
            </>
}

export default E22Card;