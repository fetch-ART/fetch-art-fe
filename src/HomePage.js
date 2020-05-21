import React, { Component } from 'react'
import NavSignUp from './NavSignUp.js';
import './App.css';
import './NavSignUp.css';
import Logo from './fetchART.jpg';

export default class HomePage extends Component {
    render() {
        console.log(this.props, 'homepage')
        return (
            <div>

            <div className='nav-buttons' >
            <NavSignUp history={this.props.history} />
            </div>

        <div className='center-elements'>
            <img src={ Logo } alt=''/>

            <div className="about-app">


                <p>This is an app made for those seeking a meditative space to find images inspired by a mood and to create a personalized favorites gallery.</p>


            </div>
            </div>
            </div>
        )
    }
}
