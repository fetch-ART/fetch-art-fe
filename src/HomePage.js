import React, { Component } from 'react'
import NavSignUp from './NavSignUp.js';
import './HomePage.css';
import './NavSignUp.css';
import Logo from './fetchART.jpg';

export default class HomePage extends Component {
    render() {
        console.log(this.props, 'homepage')
        return (
            <div>

                <section className='nav-buttons' >
                <NavSignUp history={this.props.history} />
                </section>

                <div className='center-elements'>
                    <img src={ Logo } alt=''/>

                    <section className="about-app">


                        <p>Made for those seeking a meditative space inspired by the emotions of every day.</p>
                        <p>Find art that brings you joy in these wild, wild times.</p>
                        <p>This app is brought to you by Feelings.</p>
                
                    </section>
                </div>
                
            </div>
        )
    }
}
