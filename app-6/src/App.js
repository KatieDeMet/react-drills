import React from 'react';
import './App.css';
import Todo from "./Todo"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: "",
      taskList: []
    }
  }

  handleClick = () => {
    this.setState(prev => ({
      taskList: [...prev.taskList, this.state.userInput]
    }))
    this.setState({userInput: ""})
  }

  render() {
    return (
      <div>
        <label htmlFor="taskInput">Enter new task: </label>
        <input id="taskInput" onChange={(e) => this.setState({userInput: e.target.value})} value={this.state.userInput} />
        <button onClick={this.handleClick}>Add Task</button>
        <Todo list={this.state.taskList} />
      </div>
    )
  }
}

export default App;
