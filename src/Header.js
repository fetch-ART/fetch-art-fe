import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header'> 
            <p className='header-title'>fetch Art </p>
                <br></br>
                <Link to="/">Home Page</Link>
                <br></br>
                <Link to="/auth">Sign Up/ Login</Link>
                <br></br>
                <Link to="/favorites">My Favorites</Link>
                <br></br>
                <Link to="/aboutus">About Us</Link>
                <br></br>
            </div>
        )
    }
}
