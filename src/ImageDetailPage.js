import React, { Component } from 'react'
import request from 'superagent';

export default class ImageDetailPage extends Component {
    
    state = { 
        image: null, 
        favorites: null 
    }

    componentDidMount = async () => { 
            const fetchedData = await request.get(`http://localhost:3000/api/detail/${this.props.match.params.id}`).set('Authorization', this.props.token)

            

            this.setState({ image: fetchedData.body});
            
            
        }

    
    //can pass down the object from list page as a prop, or we can grab from the id in the url 
    // 
    handleClick = async () => { 
        const fetchedData = await request.post('http://localhost:3000/api/favorites', { image_id: this.props.match.params.id }).set('Authorization', this.props.token)

        this.setState({ favorites: fetchedData.body});
        this.props.history.push('/favorites')
    }

    
    render() {
        // console.log(this.props.match.params)
        return (
            <div>
                <img src= {this.state.image && this.state.image.urls.regular} 
                alt="" />
                <h1>Photographer Name: {this.state.image && this.state.image.user.name} </h1>
                <h1>Insta: { this.state.image && this.state.image.user.instagram_username} </h1>

                <button onClick={this.handleClick}>Favorite</button>
            </div>
        )
    }
}
