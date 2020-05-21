import React, { Component } from 'react'
import request from 'superagent';
import ListItem from './ListItem.js';


export default class FavoritesPage extends Component {

    state = {
        data: [],
        newData: ''
    }

    loadFavorites = async () => {
        const fetchedData = await request.get(`http://localhost:3000/api/favorites`).set('Authorization', this.props.token)

        const fetchedImages = await Promise.all(fetchedData.body.map((favImage) => {
            return request.get(`http://localhost:3000/api/detail/${favImage.image_id}`).set('Authorization', this.props.token)
        }));

        this.setState({ data: fetchedImages.map(image => image.body)});
        console.log(this.state.data)
    }

    componentDidMount = async () => {

        await this.loadFavorites();

    }

    handleClick = async (item) => {

       
        console.log(item)
        await request.delete(`http://localhost:3000/api/favorites/${item.id}`).set('Authorization', this.props.token)
        
        
       
       await this.loadFavorites();
    }

    render() {

        return (
            <>
            <div>
                {
                    this.state.data.map(item => {
                        return  <div>
                            <ListItem detail={item}/>
                            <button onClick={ () => this.handleClick(item)}>Remove</button>
                        </div>
                    })
                }

            </div>

            </>
        )
    }
}
