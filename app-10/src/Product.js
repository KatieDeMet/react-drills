import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const data = this.props.location.state.data
        return (
            <div>
                <h1>{data.title}</h1>
                <img src={data.image} alt="product" width="300" height="auto" />
                <p>${data.price}</p>
                <p>{data.description}</p>
            </div>
        )
    }
}
