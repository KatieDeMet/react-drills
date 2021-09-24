import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ["apple", "broccoli", "pear", "peach", "tuna", "noodles", "spinach"],
      userInput: "",
      filteredList: []
    }
  }

  handleChange = ({target}) => {
    this.setState({filteredList: []})
    const {value} = target
    this.setState({userInput: value})
    this.state.list.map(item => {
      if(item.includes(value)) {
        this.setState(prev => ({filteredList: [...prev.filteredList, item]}))
      }
    })
  }

  render() {
    const displayList = this.state.filteredList.length > 0 ? this.state.filteredList : this.state.list
    const outputDisplayList = displayList.map((listItem, i) => {
      return <p key={i}>{listItem}</p>
    })
    return (
      <div>
        <input onChange={this.handleChange}></input>
        <div>{outputDisplayList}</div>
      </div>
    )
  }
}

export default App;
