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
            <div>

                <button onClick={ this.handleSignUpClick }> Sign Up / Login </button>

                 <button onClick={ this.handleAboutUsClick }> About Us </button>
            </div>
        )
    }
}
