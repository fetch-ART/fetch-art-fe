import React, { Component } from 'react'
// import request from 'superagent'
import { nasaData } from './Data.js'

export default class ListPage extends Component {

    state = {
        imageList: [],
        filter: ''
    }

    async componentDidMount() {

        const images = ({nasaData})

        this.setState({ imageList: images })
        console.log(images)
    }
    handleFilter = (e) => {
        this.setState({ filter: e.target.value })
    }

    render() {
        return (
            <div>
                hello
                <select onChange={this.handleFilter}>
                    <option value="">All</option>
                    {/* {
                    this.state.imageList.map(image => {


                    })
                } */}
                </select>
                
            </div>
        )
    }
}
