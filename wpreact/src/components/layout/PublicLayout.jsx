import React from 'react';
import Navbar from '../Navbar';

const PublicLayout = ( props ) => {
    return(
        <React.Fragment>
            <Navbar />
            <main className="main bg-dark">
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default PublicLayout