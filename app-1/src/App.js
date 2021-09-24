import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      userInput: ""
    }
  }

  handleChange = ({target}) => {
    const {value} = target
    this.setState({userInput: value})
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange}></input>
        <span>{this.state.userInput}</span>
      </div>
    )
  }
}
