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
        searchQuery: '',
        page: 0

    }

    componentDidMount = async () => {
        const currentToken = localStorage.getItem('TOKEN')
        this.setState({ token: currentToken})
    }

    handleClick = async (mood) => {
        //find a way to hide our key

        await this.setState({ searchQuery: mood })
        await this.setState({ page: 1 })
        const fetchData = await request.get(`https://nameless-hollows-93608.herokuapp.com/api/list/'${this.state.searchQuery}'&page=${this.state.page}`).set('Authorization', this.state.token)

        this.setState({ data: fetchData.body.results })
        
    }

    moveToNextPage = async () => {
        
        const nextPage = this.state.page + 1;
        this.setState({ page: nextPage })

        const response = await request.get(`https://nameless-hollows-93608.herokuapp.com/api/list/'${this.state.searchQuery}'&page=${nextPage}`).set('Authorization', this.state.token);
        
        const results = response.body.results;
        this.setState({ data: results})
      }

      moveToPrevPage = async () => {
        
        const prevPage = this.state.page - 1;
        this.setState({ page: prevPage })

        const response = await request.get(`https://nameless-hollows-93608.herokuapp.com/api/list/'${this.state.searchQuery}'&page=${prevPage}`).set('Authorization', this.state.token);
        
        const results = response.body.results;
        this.setState({ data: results})
      }
    
    render() {
        console.log(this.state.searchQuery)
        console.log(this.state.data);
        console.log(this.state.page)
        return (

                <section className="mood-button-page-main-container">
                    
                    <Header />

                    <MusicPlayer />

                    <main className='button-div'>
                        {this.state.page > 1 && <button className="page-buttons" onClick={ () =>{this.moveToPrevPage()}}>Prev Page</button>}

                        <button className='happy-button' onClick={ () => this.handleClick('happy')}>Happy</button>
                        <button className='calm-button' onClick={ () => this.handleClick('calm')}>Calm</button>
                        <button className='love-button' onClick={ () => this.handleClick('love')}>Love</button>
                        <button className='med-button' onClick={ () => this.handleClick('meditative')}>Meditate</button>
                        <button className='friend-button' onClick={ () => this.handleClick('friend')}>Friend</button>
                        <button className='relax-button' onClick={ () => this.handleClick('relax')}>Relax</button>

                        {this.state.page > 0 && <button className="page-buttons" onClick={ () =>{this.moveToNextPage()}}>Next Page</button>}
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
