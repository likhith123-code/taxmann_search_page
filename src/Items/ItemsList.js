import React from "react";
import Item from "./Item";

const ItemList = (props) => {
    console.log(props.searchResults)
    return (
        <div className="card-outer">
            {props.searchResults.map((data, index) => (
                data = { ...data, id: index + 1 },
                <Item data={data} />
            ))}
        </div>
    )
}

export default ItemList;