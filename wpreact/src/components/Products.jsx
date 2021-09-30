import React, { useEffect, useState } from 'react'
import PublicLayout from './layout/PublicLayout'
import { Link } from 'react-router-dom'
import Woocommerce from "./Woocommerce"


const Products = () => {

 // All products (array of objects)
 const [productsData, setProductsData] = useState({
        productsAll: [],
        loading: false
    });

    useEffect( ()=>(
        
        Woocommerce.getProducts().then(res => {
            console.log("getProdcuts Result: ", res)
            setProductsData({ productsAll: res.data, loading: false })
        })

    ), [] )


    const { loading, productsAll } = productsData;

    return (
        <PublicLayout>
            <div className="container">
               { loading ? " Loading..." : 
               
               
               productsAll.map( (p)=> (
                  <div className="productBox" key={p.id}>
                    <small>{p.id}</small>
                    <h4>{p.name}</h4> 
                    <Link to={`product/${p.id}`}>View Detail</Link>
                  </div>
                ))

               }
            </div>
        </PublicLayout>
    )
}

export default Products