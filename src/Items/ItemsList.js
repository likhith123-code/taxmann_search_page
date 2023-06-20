import React from "react";
import Item from "./Item";

const ItemList = (props) => {
    console.log(props.searchResults)
    return (
        <div className="card-outer">
            {props.searchResults.map(data => (
                <Item data={data} />
            ))}
        </div>
    )
}

export default ItemList;