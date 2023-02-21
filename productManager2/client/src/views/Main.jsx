import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


import ProductForm from '../components/ProductForm'


const Main = () => {
    const [product, setProduct] = useState([])

    const nav = useNavigate()

        useEffect(() => {
            axios.get('http://localhost:8000/api/products')
                .then(res => {
                    setProduct(res.data)
                })
                .catch(err => console.error(err))
        }, [])

    return (
        <div>
            <ProductForm />
            <hr />
            <h1>All Products:</h1>
            {
                product.map((oneProduct, i) => {
                    return (
                        <p key={i}>
                            <Link to={`/products/${oneProduct._id}`}>{oneProduct.title}</Link>
                        </p>
                    )
                }

                )}
        </div>
    )

}
export default Main