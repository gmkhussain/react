import React, { Component } from "react";


export class BookItem extends Component {
    render() {

     const { title } = this.props.book;
    
     return <div>
                <p>Title: {title.rendered}</p>
            </div>
    }
}

export default BookItem;