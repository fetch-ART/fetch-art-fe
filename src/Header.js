import React, { Component } from 'react'
import { Link }  from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <br></br>
                <Link to="/auth">Sign Up/ Login</Link>
                <br></br>
                <Link to="/aboutus">About Us</Link>
                <br></br>
                <Link to="/favorites">My Favorites</Link>
                <br></br>
                <Link to="/">Home Page</Link>
                <br></br>
            </div>
        )
    }
}
