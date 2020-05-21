import React, { Component } from 'react'
import request from 'superagent';
// import ListItem from './ListItem.js';

export default class FavoritesPage extends Component {
    
    state = {
        data: [],
        favoritesArray: []
    }

    componentDidMount = async () => { 
        
        const fetchedData = await request.get(`http://localhost:3000/api/favorites`).set('Authorization', this.props.token)

        console.log(fetchedData)
        this.setState({ data: fetchedData.body});

        // const fetchedData = await request.get(`http://localhost:3000/api/detail/${this.state.data.image_id}`).set('Authorization', this.props.token)
        this.state.data.map(favorite => {
            return this.state.favoritesArray.push(favorite.image_id)
            
        })
        console.log(this.state.favoritesArray, 'favoritesArray')
        
    }
    
    render() {
        // console.log(this.state.data)
        return (
            <div>
                hello

            {/* { this.state.favoritesArray.map(item => { 
                return <li>
                    <img src={`http://localhost:3000/api/detail/${item.image_id}`} alt=""/>
                </li>
            }) 
            } */}
            <h1>{JSON.parse(JSON.stringify(this.state.favoritesArray))} FAVORITES!</h1>
            </div>
        )
    }
}
