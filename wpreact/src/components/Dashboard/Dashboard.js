import React from 'react'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageTitle: "Dashboard"
        }
    }

    render() {
        return (
            <div>
                <h4>Dashboard</h4>
            </div>
        )
    }
}

export default Dashboard