import React, { useState } from 'react'
import axios from 'axios'
import '../App.css';

export default () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState()
    const [description, setDescription] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div className='formContainer'>
            <h1 className='formHeading'>Product Manager</h1>
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
                <input className='formSubmit' type='submit' value='Create' />
            </form>
        </div>
    )
}