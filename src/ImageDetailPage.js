import React, { Component } from 'react'
import request from 'superagent';
import Header from './Header.js';
import './ImageDetailPage.css';

export default class ImageDetailPage extends Component {

    state = {
        image: null,
        favorites: null
    }

    componentDidMount = async () => {
            const fetchedData = await request.get(`http://nameless-hollows-93608.herokuapp.com/api/detail/${this.props.match.params.id}`).set('Authorization', this.props.token)



            this.setState({ image: fetchedData.body});


        }


    //can pass down the object from list page as a prop, or we can grab from the id in the url
    //
    handleClick = async () => {
        const fetchedData = await request.post('http://nameless-hollows-93608.herokuapp.com/api/favorites', { image_id: this.props.match.params.id }).set('Authorization', this.props.token)

        this.setState({ favorites: fetchedData.body});
        this.props.history.push('/favorites')
    }


    render() {
        // console.log(this.props.match.params)
        return (
            <div>
                <Header />
                <section className='detail-block'>

                <img className="detail-image" src= {this.state.image && this.state.image.urls.regular}
                alt="" />

                <h3 className="detail-page-h3"><strong>Photographer Name: </strong> {this.state.image && this.state.image.user.name} </h3>

                <h3 className="detail-page-h3"><strong>Insta: </strong>{ this.state.image && this.state.image.user.instagram_username} </h3>

                <button className='favorite-button'onClick={this.handleClick}>Favorite</button>
                </section>
            </div>
        )
    }
}
