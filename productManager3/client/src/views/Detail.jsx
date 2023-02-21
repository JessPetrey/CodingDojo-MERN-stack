import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

const Detail = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const [oneProduct, setOneProduct] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setOneProduct(res.data)
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <>
            {
                oneProduct ?
                    <div>
                        <h1>{oneProduct.title}</h1>
                        <p>Price: ${oneProduct.price}</p>
                        <p>Description: {oneProduct.description}</p>
                        <hr/>
                        <button className='formSubmit' onClick={e=> nav(`/products/${id}/edit`)}>Edit</button>
                    </div>
                    : <h1>loading...</h1>

            }
        </>
    )
}

export default Detail