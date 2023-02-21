import '../App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';




const Edit = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                const oneProduct = res.data
                setTitle(oneProduct.title)
                setPrice(oneProduct.price)
                setDescription(oneProduct.description)
            })
            .catch(err => console.error(err))
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                nav('/products')
            })
            .catch(err => console.log(err))
    }

    const handleDelete = e => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                nav('/products')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='formContainer'>
            <h1 className='formHeading'>Edit Product Details</h1>
            <form className='form' onSubmit={handleSubmit}>
                <p className='formRow'>
                    <label className='label'>Title</label>
                    <input id='input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                </p>
                <p className='formRow'>
                    <label className='label'>Price</label>
                    <input id='input' type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p className='formRow'>
                    <label className='label'>Description</label>
                    <input id='input' type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
                </p>
                <input className='formSubmit' type='submit' value='Update' />
                <button className='formSubmit' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}

export default Edit