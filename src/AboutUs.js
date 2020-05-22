import React, { Component } from 'react';
import Logo from './Logo_NoText.jpg';
import Header from './Header.js';
import Briseida from './briseida.jpg';
import Breeann from './breeann.jpg';
import Jaime from './jaime.jpg';
import Max from './max.jpg';

import Github from './github.jpg'
import LinkedIn from './linkedin.jpg'
import './AboutUs.css';
import MusicPlayer from './MusicPlayer.js'


export default class AboutUs extends Component {
    render() {
        return (
            <>
                <section className="about-us-logo-section">
                    <img src={Logo} alt="" className="about-us-logo-image"/>
                    <Header />
                </section>
               
                <section className="about-us-main-container">

                    <h1 className="about-us-header">Meet the Team Behind Fetch ART!</h1>

                    <MusicPlayer />

                    <section className="all-person-card-container">
                        
                        <section className="one-person-div"> 
                            <img src={Briseida} alt="" className="one-person-image"/>
                            <h3 className="name-header">Briseida</h3>
                            <p className="one-person-p">Briseida is a developer that heavily relies on her mental health to carry on in this wild, wild world. She has been respecting quarantine for about 70 days now and deeply misses hugging, sharing meals, and listening to her friends laughing really hard.</p>
                            <a href="https://github.com/bpagador" >
                                <img src={Github} alt="" className="github-icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/briseida-pagador"  >
                                <img src={LinkedIn} alt="" className="linkedin-icon" />
                            </a>
                        </section>

                        <section className="one-person-div"> 
                            <img src={Breeann} alt="" className="one-person-image"/>
                            <h3 className="name-header">Breeann</h3>
                            <p className="one-person-p">Hey there! My name is Breeann and I was part of the team that created Fetch ART. I was really interested in this project as it combines development, art and design and loved to develop a new way to connect with lesser known creatives and their images.
                            </p>
                            <a href="https://github.com/breeannb" >
                                <img src={Github} alt="" className="github-icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/breeannbolinsky/"  >
                                <img src={LinkedIn} alt="" className="linkedin-icon" />
                            </a>
                        </section>

                        <section className="one-person-div"> 
                            <img src={Jaime} alt="" className="one-person-image"/>
                            <h3 className="name-header">Jaime</h3>
                            <p className="one-person-p">Jaime is a software engineer with a degree in photography. She enjoys looking at beautiful images to boost her mood and inspire creativity. Her favorite types of photography are travel and landscape, and she looks forward to doing both once it is safe to do so.</p>
                            <a href="https://github.com/jaimekinsley">
                                <img src={Github} alt="" className="github-icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/jaimelyn/">
                                <img src={LinkedIn} alt="" className="linkedin-icon" />
                            </a>
                        </section>

                        <section className="one-person-div"> 
                            <img src={Max} alt="" className="one-person-image"/>
                            <h3 className="name-header">Max</h3>
                            <p className="one-person-p">My name is Max and I felt like this project would be a good way for me to create something that helps people get out of the darkness that can take over their mental space at certain difficult times.</p>
                            <p> </p>
                            <a href="https://github.com/MaximusLamb">
                                <img src={Github} alt="" className="github-icon"/>
                            </a>
                            <a href="https://www.linkedin.com/in/max-lamb-541b64147/">
                                <img src={LinkedIn} alt="" className="linkedin-icon" />
                            </a>
                        </section>

                    </section>

                </section>
            </>
        )
    }
}
