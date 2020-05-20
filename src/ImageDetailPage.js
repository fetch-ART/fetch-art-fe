import React, { Component } from 'react'
import request from 'superagent';

export default class ImageDetailPage extends Component {
    
    state = { image: null }

    componentDidMount = async () => { 
            const fetchedData = await request.get(`http://localhost:3000/api/detail/${this.props.match.params.id}`).set('Authorization', this.props.token)

            this.setState({ image: fetchedData.body});
            
        }

    
    render() {
        
        return (
            <div>
                <img src= {this.state.image && this.state.image.urls.regular} 
                alt="" />
                <h1>Photographer Name: {this.state.image && this.state.image.user.name} </h1>
                <h1>Insta: { this.state.image && this.state.image.user.instagram_username} </h1>
            </div>
        )
    }
}
