import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PublicLayout from './layout/PublicLayout'



import axios from 'axios'
import clientConfig from '../config/client-config'
import { apiAuthOnly } from '../config/auth-config'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'


const Products = () => {

    const ConsumerKey = `ck_dd7aedcd23d6ff2068576a28e38abedef4d882d1`
    const ConsumerSecret = `cs_8be1452e53b7360ec723991283f700e8a3d496cc`
    // localhost/projects/wordpress/wpv/wp-json/wc/v3/products?per_page=2

const api = new WooCommerceRestApi({
  url: `${clientConfig.rootUrl}`,
  consumerKey: ConsumerKey,
  consumerSecret: ConsumerSecret,
  version: "wc/v3",
  queryStringAuth: true
});


console.log(api)

    const [productData, setProductData] = useState( {
        products1: [],
        loading: false,
        message: false
    })

    const getProducts = () => {
        
            setProductData({
                ...productData,
                loading: true
             })

        axios.get(`${clientConfig.rootUrl}wp-json/wc/v3/products?consumer_key=ck_dd7aedcd23d6ff2068576a28e38abedef4d882d1&consumer_secret=cs_8be1452e53b7360ec723991283f700e8a3d496cc&oauth_consumer_key=ck_dd7aedcd23d6ff2068576a28e38abedef4d882d1&oauth_signature_method=HMAC-SHA1` )
        .then( res => {
            
            console.log("productData.products: ", res.data)

            setProductData({
                    ...productData,
                    loading: false,
                    products1: res.data
                })

        }).catch( err => {
                    console.log("Err", err)
                    setProductData( {
                        ...productData,
                        message: err
                    } )
             }
        )
    }
    

    useEffect ( ()=> {
        console.log("Ready...")
        getProducts();

        
    }, [])


    const { loading, products1, message } = productData

    return (
        <PublicLayout>
            
                { message ? `${message}` : " " }
            
                { loading
                    ? "Loading..." :
                    <div className="container">
                        { products1.map( p=>(
                            <div className="productBox" key={p.id}>
                                <small> { p.id }  </small>
                                <h3>{p.name}</h3>
                                <Link to={p.slug}>View</Link>
                            </div>
                        ) ) }
                    </div>
                }

        </PublicLayout>
    )

}

export default Products
