import React from "react";

class List extends React.Component {

    render() {
        return (
            <div>
                {this.props.list.map((listItem, i) => {
                    return <p key={i}>{listItem}</p>
                })}
            </div>
        )
    }
}

export default List;