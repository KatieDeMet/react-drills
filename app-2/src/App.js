import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ["item1", "item2", "item3", "item4"]
    }
  }


  render() {
    return (
      <ul>
        {this.state.list.map(listItem => {
          return <li>{listItem}</li>
    })}
      </ul>
    )
  }
}

export default App;
