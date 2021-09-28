import React, { useEffect } from 'react'
import PublicLayout from './layout/PublicLayout'

import axios from 'axios'
import authConfig from '../config/auth-config'


const Products = () => {

    //Consumer key: ck_dd7aedcd23d6ff2068576a28e38abedef4d882d1
    //Consumer secret: cs_8be1452e53b7360ec723991283f700e8a3d496cc
    // localhost/projects/wordpress/wpv/wp-json/wc/v3/products?per_page=2

    const getProducts = () => {
        axios.get(`http://localhost/projects/wordpress/wpv/wp-json/wc/v3/products`, {
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
          } )
        .then( res => {
            console.log(res)
        }).catch(
            err => console.log(err)
        )
    }
    

    useEffect ( ()=> {
        console.log("AAAAAAAA")
        getProducts();
    }, [])


    return (
        <PublicLayout>
            <div className="container text-white">
            DDDDDDDDD
            </div>
        </PublicLayout>
    )

}

export default Products
