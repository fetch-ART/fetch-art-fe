import React, { Component } from 'react'
import request from 'superagent';
import ListItem from './ListItem.js';
import Header from './Header.js';
import './FavoritesPage.css'

export default class FavoritesPage extends Component {

    state = {
        data: [],
    }

    loadFavorites = async () => {
        const fetchedData = await request.get(`http://nameless-hollows-93608.herokuapp.com/api/favorites`).set('Authorization', this.props.token)

        const fetchedImages = await Promise.all(fetchedData.body.map((favImage) => {
            return request.get(`http://nameless-hollows-93608.herokuapp.com/api/detail/${favImage.image_id}`).set('Authorization', this.props.token)
        }));

        this.setState({ data: fetchedImages.map(image => image.body)});
        console.log(this.state.data)
    }

    componentDidMount = async () => {
        await this.loadFavorites();
    }

    handleClick = async (item) => {
        console.log(item)

        await request.delete(`http://nameless-hollows-93608.herokuapp.com/api/favorites/${item.id}`).set('Authorization', this.props.token)

       await this.loadFavorites();
    }

    render() {
        return (
            <>
            <div>
                <Header />
                {
                    this.state.data.map(item => {
                        return  <div className='favorites-list'>
                            <ListItem detail={ item }/>
                            <button onClick={ () => this.handleClick(item)} className="remove-button">Remove</button>
                        </div>
                    })
                }
            </div>
            </>
        )
        }
}
