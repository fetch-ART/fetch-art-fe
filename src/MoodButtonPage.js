import React, { Component } from 'react'
import request from 'superagent'
// import { Link } from 'react-router-dom'
import ListItem from './ListItem.js'
import './MoodButtonPage.css'
import Header from './Header.js';
import MusicPlayer from './MusicPlayer.js'

export default class MoodButtonPage extends Component {
    state = {
        data: [],
        searchQuery: ''

    }

    componentDidMount = async () => {
        const currentToken = localStorage.getItem('TOKEN')
        this.setState({ token: currentToken})
    }

    handleClick = async (mood) => {
        //find a way to hide our key

        await this.setState({ searchQuery: mood })

        const fetchData = await request.get(`http://nameless-hollows-93608.herokuapp.com/api/list/'${this.state.searchQuery}'`).set('Authorization', this.state.token)

        this.setState({ data: fetchData.body.results })
        
    }
    
    render() {
        console.log(this.state.searchQuery)
        console.log(this.state.data);
        return (

                <section className="mood-button-page-main-container">
                    
                    <Header />

                    <MusicPlayer />

                    <main className='button-div'>
                        <button className='happy-button' onClick={ () => this.handleClick('happy')}>Happy</button>
                        <button className='calm-button' onClick={ () => this.handleClick('calm')}>Calm</button>
                        <button className='love-button' onClick={ () => this.handleClick('love')}>Love</button>
                        <button className='med-button' onClick={ () => this.handleClick('meditative')}>Meditate</button>
                        <button className='friend-button' onClick={ () => this.handleClick('friend')}>Friend</button>
                        <button className='relax-button' onClick={ () => this.handleClick('relax')}>Relax</button>
                    </main>
            
                    <div className='mood-images-div'>
                        {
                            this.state.data.map(item => {
                                return  <div>
                                    <ListItem detail={item}/>
                                </div>
                            })
                        }
                    </div>
                    

                </section>
            
        )
    }
}


// list page is working when "happy" button is clicked, detail page shows "cannot read property description of undefined"
// we will pick back up at the detail page
// afterward we need to hook up our backend to our API