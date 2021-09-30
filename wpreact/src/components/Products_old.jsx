import React, { useEffect, useState } from 'react'
import PublicLayout from './layout/PublicLayout'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

import clientConfig from '../config/client-config'
import authConfig from '../config/auth-config'

import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = () => {

    // const api = new WooCommerceRestApi({
    //     url: clientConfig.rootUrl,
    //     consumerKey: "ck_dd7aedcd23d6ff2068576a28e38abedef4d882d1",
    //     consumerSecret: "cs_8be1452e53b7360ec723991283f700e8a3d496cc",
    //     version: "wc/v3",
    //     queryStringAuth: true
    // });

    const [ productData, setProductData ] = useState({
        products: [],
        loading: false
    })



const that = this

    const ck = 'ck_dd7aedcd23d6ff2068576a28e38abedef4d882d1'
    const cs = 'cs_8be1452e53b7360ec723991283f700e8a3d496cc'
    const url = '[MY_URL]/wp-json/wc/v2/products'

    const oauth = ({
        consumer: {
            key: ck,
            secret: cs
        },
        signature_method: 'HMAC-SHA1',
        hash_function: function(base_string, key) {
            return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
        }
    });

    const requestData = {
        url: `${clientConfig.rootUrl}/wp-json/wc/v2/products`,
        method: 'GET'
    };

    

    const dd = () => {

        axios.get(
                clientConfig.rootUrl + '?' + jQuery.param(oauth.authorize(requestData))
            ).then(function(response){
                console.log(response.data)
            }, function(error){
                console.log(error)
        })
    }


    
    useEffect( ()=>{
        
        dd()
        console.log("Ready...")
        //getProducts()

    }, [])

    
    const getProducts = () => {

            setProductData({ ...productData, loading: true })

            axios.get('http://localhost/projects/wordpress/wpv/wp-json/wp/v2/product')
            .then(res=> {
                
                setProductData({
                    ...productData,
                    loading: false,
                    products: res.data
                })

                console.log( res )
                
            } ).catch( err=> {
                console.log("Err")
            } )
    }


    const { loading, products } = productData;

    return (
        <PublicLayout>
            <div className="container">
               { loading ? " Loading..." : " Loaded "  }

               {
                 products.map( (p)=> (
                  <div className="productBox" key={p.id}>
                    <small>{p.id}</small>
                    <h4>{p.title.rendered}</h4>
                    <Link to={`product/${p.id}`}>View Detail</Link>
                  </div>
                ))
               }
            </div>
        </PublicLayout>
    )
}

export default Products