import React, { Component } from "react";

export class BookItem extends Component {
    render() {

     const { title, content } = this.props.book;
    
     return <div>
                <strong>Title: {title.rendered}</strong>
                <p>Content: <span dangerouslySetInnerHTML = {{ __html: content.rendered }}></span> </p>
            </div>
    }
}

export default BookItem;
