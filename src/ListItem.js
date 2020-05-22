import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

export default class DetailPage extends Component {

    render() {
        return (
            <div className="list-page-div">
                <Link to={`/detail/${this.props.detail.id}`}>
                <section>

                    <img className="list-item-img" src = {this.props.detail.urls.regular} alt={this.props.detail.alt_description}  />

                </section>
                </Link>

            </div>
        )
    }
}
