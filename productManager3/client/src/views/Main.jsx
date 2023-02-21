import '../App.css';
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

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                updateProductList(id)
            })
            .catch(err => console.log(err))
        }
    const updateProductList = (id) => {
        const newProductList = product.filter((oneProduct) => id !== oneProduct._id)
        setProduct(newProductList)
    }

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
                                <button onClick={(e) => handleDelete(oneProduct._id)}>Delete</button>
                            </p>
                        )
                    }

                    )}
            </div>
        )

    }
    export default Main