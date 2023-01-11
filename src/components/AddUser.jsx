import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import React,{useState} from 'react'

const AddUser = () => {
    const navigate = useNavigate()
    const [user,setUser]=useState({
       name:"",
       username:"",
       email:"",
       number:"",
       website:"",
    })
    const {name,username,email,number,website}=user;
    const onInputChange=e=>{
        // console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        navigate("/")
    }
    return (
        <div>
            <form onSubmit={e=>onSubmit(e)} style={{width:500,marginLeft:30}}>
            <h1>Add a User</h1>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='enter your name' name="name" value={name}
                    onChange={e=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='enter your username' name="username" value={username}
                    onChange={e=>onInputChange(e)}
                    />
                </div> 
                <div className="mb-3">
                    <input type="number" className="form-control"  placeholder='enter your number' name="number" value={number}
                    onChange={e=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control"  placeholder='enter your email' name="email" value={email}
                    onChange={e=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <input type="website" className="form-control"  placeholder='add your website' name="website" value={website}
                    onChange={e=>onInputChange(e)}
                    />
                </div>
                
                
                <button type="submit"  className="btn btn-primary">Add User</button>
            </form>
        </div>
    )
}

export default AddUser