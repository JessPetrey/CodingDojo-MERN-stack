import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Detail = (props) => {
    const [person, setPerson] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://127.0.0.1:27017/api/people/${id}`)
        .then(res => setPerson(res.data))
        .catch(err => console.error(err))
    }, [])

    return(
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </div>
    )
}

export default Detail