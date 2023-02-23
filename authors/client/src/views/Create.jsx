import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";


const Create = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const nav = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors/new', { name })
            .then(res => {
                nav('/')
            })
            .catch(err => {
                const errResponse = err.response.data.errors
                const errorArray = []
                for (const key in errResponse) {
                    errorArray.push(errResponse[key].message)
                }
                setErrors(errorArray)
            })
    }
    const handleCancel = (e) => {
        nav('/')
    }


    return (
        <div className='container m-5'>
            <h1 className=''>Favorite Author</h1>
            <Link to={'/'}>Home</Link>
            <hr />
            <h3>Add a new author:</h3>
            <form className='form' onSubmit={handleSubmit}>
                <p className='formRow'>
                    <label className='label'>Name</label>
                    <input id='input' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                {
                    errors ?
                        <p className='text-danger'>{errors}</p>
                        : <></>
                }
                <button type='button' onClick={handleCancel} className='btn btn-danger'>Cancel</button>
                <input className='btn btn-success' type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default Create