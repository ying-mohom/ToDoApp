import React from "react";
const List = (props) => {
    return (
        <ul>
            {props.lists.map((list, index) => <h3 key={index}>{list}</h3>)}
        </ul>
    );
}
export default List;