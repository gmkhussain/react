import React, { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom";
import PublicLayout from '../layout/PublicLayout'

import axios from 'axios'

const ProductDetail = (props) => {
    
   const _ProductId = props.match.params.id

    const [ productInfo, setProductInfo ] = useState({
                    product: {
                        title: { rendered: 'No Data' },
                        content: { rendered: 'No Data' },
                    },
                    loading: false
                })


    const getProduct = (_id) => {

        setProductInfo({
            ...productInfo,
            loading: true
        })

        axios.get(`http://localhost/projects/wordpress/wpv/wp-json/wp/v2/product/${_id}`)
            .then(
                res => {
                    console.log(res.data)
                    setProductInfo({
                        ...productInfo,
                        product: res.data,
                        loading: false
                    })
                }
            )
            .catch(
                err => {
                  console.log(err)
                }
            )
    }


    useEffect( ()=> {
        getProduct(_ProductId)
        
    }, [])


    const { product, loading } = productInfo


    return (
        <PublicLayout>
          <div className="container">

            { loading ? " Loading... " :   
                <div>
                    <small>{product.id}</small>
                    <h4>{product.title.rendered} </h4>
                    <p>{product.content.rendered}</p>
                </div>
             }
            
          </div>  
        </PublicLayout>
    )    
}

export default withRouter(ProductDetail)
