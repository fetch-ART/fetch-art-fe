import React, { Component } from 'react';
import './NavSignUp.css';


export default class NavSignUp extends Component {

    handleSignUpClick = () => {
        this.props.history.push("/auth")
    }

      handleAboutUsClick = () => {
        this.props.history.push("/aboutus")
    }

    render() {
        console.log(this.props)
        return (
            <div className='links-home'>
                <button className='home-buttons' onClick={ this.handleSignUpClick }> Sign Up / Login </button>

                 <button className='home-buttons' onClick={ this.handleAboutUsClick }> About Us </button>
            </div>
        )
    }
}
