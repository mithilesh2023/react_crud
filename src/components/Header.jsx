import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary ">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" href="#">
                    Cards
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white " aria-current="page" >
                                Home
                            </Link>
                        </li> 
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white" aria-current="page" >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text-white" >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul>
                    <li className='nav-ltem btn btn-outline-dark'>
                        <Link to="/user/adduser" className='nav-link text-white'>Add User</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Header