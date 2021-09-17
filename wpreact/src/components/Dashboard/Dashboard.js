import React from 'react'
import { Link } from 'react-router-dom'
import Posts from '../../components/Posts'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageTitle: "Dashboard"
        }
    }

    render() {
        return (
            <div className="container text-white">
                <h4>Dashboard</h4>

                <Link to="/create-post">Add Post</Link>

                <Posts />
            </div>
        )
    }
}

export default Dashboard