import React from 'react';
import Navbar from '../Navbar';

const PublicLayout = ( props ) => {
    return(
        <React.Fragment>
            <Navbar />
            <main className="main bg-dark text-white">
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default PublicLayout