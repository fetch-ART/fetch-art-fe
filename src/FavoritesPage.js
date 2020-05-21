import React, { Component } from 'react'
import request from 'superagent';
// import ListItem from './ListItem.js';


export default class FavoritesPage extends Component {
    
    state = {
        data: []
    };



    loadFavorites = async () => {

        let favoritesArray = []

        const fetchedData = await request.get(`http://localhost:3000/api/favorites`).set('Authorization', this.props.token)

        console.log(fetchedData)
        this.setState({ data: fetchedData.body});

        // const fetchedData = await request.get(`http://localhost:3000/api/detail/${this.state.data.image_id}`).set('Authorization', this.props.token)
        this.state.data.map(favorite => {
            return favoritesArray.push(favorite.image_id)
            
        })
        console.log(favoritesArray, 'favoritesArray')
        return favoritesArray;
    }
    
    componentDidMount = async () => { 

        await loadFavorites();
        
    }
    
    

    render() {
        console.log(loadFavorites);
        // console.log(this.state.data)
        console.log(favoritesArray);
        return (
            <div>
                hello

            {/* { this.state.favoritesArray.map(item => { 
                return <li>
                    <img src={`http://localhost:3000/api/detail/${item.image_id}`} alt=""/>
                </li>
            }) 
            } */}
            <h1>{favoritesArray} FAVORITES!</h1>
            </div>
        )
    }
}
