import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import axios from 'axios'
import PersonList from '../components/PersonList';

const Main = (props) => {
    const [people, setPeople] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data)
                setLoaded(true)
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