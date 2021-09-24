import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      luke: {},
      planet: ""
    }
  }

  componentDidMount() {
    axios.get("https://swapi.dev/api/people/1")
      .then( res => {
        this.setState({luke: res.data})
      })
      .catch(err => console.log(err))
    axios.get("https://swapi.dev/api/planets/1/")
      .then(res => {
        this.setState({planet: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h4>Star Wars Main Character General Info</h4>
        <p>Name: {this.state.luke.name}</p>
        <p>Birth Planet: {this.state.planet.name}</p>
        <p>Birth year: {this.state.luke.birth_year}</p>
      </div>
    )
  }
}

export default App;
