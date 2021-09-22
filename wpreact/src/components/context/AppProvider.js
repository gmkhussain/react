import React, { useState, useEffect } from 'react'
import AppContext from './AppContext';

const AppProvider = ( props ) => {
  
    const [ store, setStore ] = useState( {
        userName: 'Amoos',
        token: '',
        activeMenu: { },
        sidebarActive: true
    } );


    useEffect( ()=> {
        const token = localStorage.getItem('token');
        const userName = "Amoos";

        setStore( {...store, token: token, userName: userName } )
        console.log("use eftttt.")
    },[]);

    return (
        <AppContext.Provider value={ [ store, setStore ] }>
            { props.children }
        </AppContext.Provider>
    )

}

// Wrap App with AppProvider
export default AppProvider