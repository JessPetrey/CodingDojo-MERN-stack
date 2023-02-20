import React, { useState } from "react";
import axios from 'axios'

export default () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    const onSubmitHandler = e => {
        e.preventDefault()
        //make a post req to make a new Person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
        .then(res => {
            console.log(res)
            setFirstName('')
            setLastName('')
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label> <br/>
                <input type='text' value={firstName} onChange={ (e) => setFirstName(e.target.value)}/>
            </p>
            <p>
                <label>Last Name</label> <br/>
                <input type='text' value={lastName} onChange={ (e) => setLastName(e.target.value)}/>
            </p>
            <input type='submit'/>
        </form>
    )
}