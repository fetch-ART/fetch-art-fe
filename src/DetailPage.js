import React, { Component } from 'react';


export default class DetailPage extends Component {


    render() {
        return (
            <div>
                <section>
                    <h3>
                        {this.props.detail.description}
                    </h3>
                    
                </section>
                
            </div>
        )
    }
}
