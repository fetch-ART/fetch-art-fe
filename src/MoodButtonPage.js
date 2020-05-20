import React, { Component } from 'react'
import request from 'superagent'
// import { Link } from 'react-router-dom'
import ListItem from './ListItem.js'

export default class MoodButtonPage extends Component {
    state = {
        data: [],

    }

    componentDidMount = async () => {
        const currentToken = localStorage.getItem('TOKEN')
        this.setState({ token: currentToken})
    }

    handleClick = async () => {
        //find a way to hide our key
        const fetchData = await request.get('http://localhost:3000/api/list/happy').set('Authorization', this.state.token)

        this.setState({ data: fetchData.body.results })
        
    }
    
    render() {
        console.log(this.state.data);
        return (
            <div>
                <button className='happy-button' onClick={this.handleClick}>Happy</button>

                {
                    this.state.data.map(item => {
                        return  <div>
                            <ListItem detail={item}/>
                        </div>
                    })
                }

            </div>
        )
    }
}


// list page is working when "happy" button is clicked, detail page shows "cannot read property description of undefined"
// we will pick back up at the detail page
// afterward we need to hook up our backend to our API