import React from "react";

class Todo extends React.Component {

    render() {
        return (
            <ul>
                {this.props.list.map((listItem, i) => {
                    return <li key={i}>{listItem}</li>
                })}
            </ul>
        )
    }
}

export default Todo;