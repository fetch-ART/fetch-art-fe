import React, { Component } from 'react'
import Sound from './Done_With_Work.mp3'
import './MusicPlayer.css'

export default class MusicPlayer extends Component {
    render() {
        return (
            <>
                <section className="music-player-container">
                    
                    <p className="music-player-ptag">Press the Play Button to Listen to Some Feel Good Tones!</p>
                    
                    <audio controls preload="">
                        <source src={Sound} type="audio/mpeg"></source>
                    </audio>

                </section>
            </>
        )
    }
}
