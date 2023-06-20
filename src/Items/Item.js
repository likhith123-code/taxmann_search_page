import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
    console.log(props.data);
    const truncatedContent = props.data.data.slice(0, 400);
    console.log(props);
    return (
        <div class="card">
            <div class="container">
                <h3> Score: {props.data.score} </h3>
                <p> {props.data.data}</p>
                <Link to={{ pathname: `/searchResults/${props.data.id}`, data: props.data }}>...Read More</Link>
            </div>
        </div>
    )
}

export default Item;