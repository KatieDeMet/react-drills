import React from "react";

class NewTask extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="taskInput"></label>
                <input id="taskInput" onChange={this.props.onChange} value={this.props.value} />
                <button onClick={this.props.onClick}>Add Task</button>
            </div>
        )
    }
}

export default NewTask;