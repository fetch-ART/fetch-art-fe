import React, { Component } from 'react'
import { Link }  from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/auth">Sign Up/ Login</Link>
                <Link to="/aboutus">About Us</Link>
            </div>
        )
    }
}
