import React, { Component } from 'react'
import request from 'superagent'

export default class ListPage extends Component {

    componentDidMount = async () => {
        const currentToken = localStorage.getItem('TOKEN')
        this.setState({ token: currentToken})
    }

    handleClick = async () => {
        //find a way to hide our key
    }
    
    render() {
        return (
            <div>
                <button className='happy-button' onClick={this.handleClick}>Happy</button>
            </div>
        )
    }
}