import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class DetailPage extends Component {

    render() {
        return (
            <div>
                <Link to={`/detail/${this.props.detail.id}`}> 
                <section>
                    
                    <h3>{this.props.detail.description}</h3>
                    <img src = {this.props.detail.urls.regular} alt={this.props.detail.alt_description}  />
                    
                </section>
                </Link>
                
            </div>
        )
    }
}
