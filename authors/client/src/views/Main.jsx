import '../App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";


const Main = () => {
    const [authors, setAuthors] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                updateAuthorList(id)
            })
            .catch(err => console.log(err))
    }
    const updateAuthorList = (id) => {
        const newAuthorList = authors.filter((oneAuthor) => id !== oneAuthor._id)
        setAuthors(newAuthorList)
    }


    return (
        <div className='container mt-5'>
            <h1>Favorite Authors</h1>
            <Link to={'/new'} >Add an Author</Link>
            <hr />
            <h3>We have quotes by: </h3>
            <table className='table table-bordered'>
                <thead className='table-secondary'>
                    <tr>
                        <td>Author</td>
                        <td colSpan={2}>Actions Available</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((oneAuthor, i) => {
                            return (
                                <tr key={i}>
                                    <td>{oneAuthor.name}</td>
                                    <td>
                                        <Link to={`/edit/${oneAuthor._id}`} className='btn btn-success'>Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={(e) => handleDelete(oneAuthor._id)} className='btn btn-danger' >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main