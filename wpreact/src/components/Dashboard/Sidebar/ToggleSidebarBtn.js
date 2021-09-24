import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const ToggleSidebarBtn = () => {
    const [ store, setStore ] = useContext( AppContext );

    return (
        <button type="button" id="sidebarCollapse"
                onClick={ ()=> setStore({
                     ...store,
                     sidebarActive: ! store.sidebarActive
                     }) }
                className= { `btn btn-secondary ml-2  ${ store.sidebarActive ? 'active' : ' ' } `}
        >
            SIDEBAR
        </button>
    )
}

export default ToggleSidebarBtn