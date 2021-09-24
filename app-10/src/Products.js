import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

export default class Products extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                this.setState({data: res.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Products Page</h1>
                <ul>
                    {this.state.data.map(item => {
                       return <li key={item.id}><Link to={`/product/${item.id}`}>{item.title}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}
