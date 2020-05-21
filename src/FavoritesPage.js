import React, { Component } from 'react'
import request from 'superagent';
import ListItem from './ListItem.js';


export default class FavoritesPage extends Component {

    state = {
        data: []
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

    render() {

        return (
            <div>
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
