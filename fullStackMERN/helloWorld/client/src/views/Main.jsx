import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = (props) => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data)
            })
            .catch(err => console.error(err))
}, [])
    return(
        <div>
            <PersonForm />
            <hr />
            {people ?  <PersonList people={people}/> : <h3>add some peeps</h3>}
        </div>
    )
}

export default Main