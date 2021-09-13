import React, { Component } from 'react'
import axios from 'axios'

export class Books extends Component {
    state = {
        book: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://localhost/projects/wordpress/wpv/wp-json/wp/v2/posts')
        .then(res=> this.setState ({
            book: res.data,
            isLoaded: true
        }))
        .catch(err => {
            console.log(err)
        } )

    }

    render() {
        console.log(this.state)
        return (
            <div>
                check console
            </div>
        )
    }
}

export default Books