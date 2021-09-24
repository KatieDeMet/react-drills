import React from "react";
import NewTask from './NewTask';
import List from "./List"

class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
          taskList: [],
          userInput: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
      }
    
      handleChange = ({target}) => {
        this.setState({userInput: target.value})
      }
    
      handleClick = () => {
        this.setState(prev => ({
            taskList: [...prev.taskList, this.state.userInput],
            userInput: ""
        }))
      }

    render() {
        return (
            <div>
                <NewTask onChange={this.handleChange} value={this.state.userInput} onClick={this.handleClick} />
                <List list={this.state.taskList} />
            </div>
        )
    }
}

export default Todo;