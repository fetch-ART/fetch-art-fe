import React, { Component } from 'react'
import request from 'superagent';

export default class ImageDetailPage extends Component {
    
    state = { image: null }

    componentDidMount = async () => { 
            const fetchedData = await request.get(`http://localhost:3000/detail/${this.props.match.params.id}`)

            this.setState({ image: fetchedData.body});
        }

    
    render() {
        console.log(this.state.image);
        return (
            <div>
                <h1>{this.state.image.description} </h1>
            </div>
        )
    }
}
