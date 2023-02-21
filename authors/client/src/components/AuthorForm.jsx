import React, { useState } from 'react'
import axios from 'axios'
import '../App.css';

const AuthorForm = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors', { name })
            .then(res => {
                console.log(res)
                setName('')
            })
            .catch(err => {
                const errResponse = err.response.data.errors 
                const errorArray = []
                for(const key of Object.keys(errResponse)){
                    errorArray.push(errResponse[key].message)
                }
                setErrors(errorArray)
            })
    }


    return (
        <div className='formContainer'>
            <h1 className='formHeading'>Favorite Author</h1>
            <form className='form' onSubmit={handleSubmit}>
                <p className='formRow'>
                    <label className='label'>Name</label>
                    <input id='input' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <input className='formSubmit' type='submit' value='Add Author' />
            </form>
        </div>
    )
}

export default AuthorForm