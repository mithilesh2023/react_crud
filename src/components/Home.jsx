import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    loadUser()
  }, [])
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users", "abc")
    setUsers(result.data)
  }
  const deleteUser=async id=>{
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  }
  return (
    <div>
      <h1>Home</h1>
      <table class="table">
        <thead>
          <tr className='bg-dark text-white'>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th>{index + 1}</th>
              <th>{user.name}</th>
              <th>{user.username}</th>
              <th>{user.email}</th>
              <th className='mx-3xl'>
                <Link className='btn btn-primary text-white m-2' to={`/user/${user.id}`}><i class="fa fa-eye " ></i></Link>
                <Link className='btn btn-primary text-white m-2' to={`/user/edituser/${user.id}`}>Edit</Link>
                <Link className='btn btn-danger text-white m-2' onClick={()=>deleteUser(user.id)}>Delete</Link>
              </th>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home