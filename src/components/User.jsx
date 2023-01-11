import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
const User = () => {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        number:"",
        website:"",
    })
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(res.data)
      }
  return (
    <div>
    <Link to="/" className='btn btn-primary'>Back to Home</Link>
    <h1 className='display-4'>User Id :{id}</h1> <hr />
    <ul>
        <li className='list-group-item'>name:{user.name}</li>
        <li className='list-group-item'>user name:{user.username}</li>
        <li className='list-group-item'>user name:{user.number}</li>
        <li className='list-group-item'>user name:{user.website}</li>
    </ul>
    </div>
  )
}

export default User