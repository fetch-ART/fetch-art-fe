import React, { Component } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'
import DetailPage from './DetailPage.js'

export default class ListPage extends Component {
    state = {
        data: [],

    }

    componentDidMount = async () => {
        const currentToken = localStorage.getItem('TOKEN')
        this.setState({ token: currentToken})
    }

    handleClick = async () => {
        //find a way to hide our key
        const fetchData = await request.get('https://api.unsplash.com/search/photos?query=happy&page=1&client_id=CUNUKhGnQYLX8XHwEllBIUU35CEBJkEoPA4YQD1aYXQ').set('Authorization', this.state.token)

        this.setState({ data: fetchData.body.results })
        
    }
    
    render() {
        return (
            <div>
                <button className='happy-button' onClick={this.handleClick}>Happy</button>
                {
                    this.state.data.map(item => {
                        return <li> <Link to='/detail' > <img src = {item.urls.regular} alt={item.alt_description}  /> 
                        
                        <DetailPage detail={item}/>

                        </Link>

                            
                        </li>
                    })
                }
            </div>
        )
    }
}

// list page is working when "happy" button is clicked, detail page shows "cannot read property description of undefined"
// we will pick back up at the detail page
// afterward we need to hook up our backend to our API