import axios from 'axios'
import "./UserList.css"
import { useEffect, useState } from 'react'
import CardComponent from './CardComponent'
const UserList = () => {
    const [users , setUsers] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='ListCont'>
       {users.map((user , index) => <CardComponent className={'singelCard'} key={index} user={user} /> )}

    </div>
  )
}

export default UserList