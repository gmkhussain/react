import React, { Component } from 'react'
import axios from 'axios'
import { BookItem } from './BookItem'

export class Books extends Component {
    state = {
        books: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts')
        .then(res=> this.setState ({
            books: res.data,
            isLoaded: true
        }))
        .catch(err => {
            console.log(err)
        } )

    }

    render() {
        // console.log(this.state)

        const { books, isLoaded } = this.state
        console.log("books", books)

        if(isLoaded === true) {
            return (
                <div>
                    {books.map(book=>(
                        <BookItem key={book.id} book={book} />
                    ))}
                </div>
            )
        }

        return (
            <div>Loading...</div>
        )
    }
}

export default Books