import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'> 
            <p className='header-title'>fetch Art </p>
                <Link to="/">Home Page  /  </Link>
                <Link to="/auth">Sign Up + Login  /  </Link>
                <Link to='/list'>Mood Board  /  </Link>
                <Link to="/favorites">My Favorites  /  </Link>
                <Link to="/aboutus">About Us</Link>

            </div>
        )
    }
}
