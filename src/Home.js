import React from "react";
import ItemList from "./Items/ItemsList";

const Home = (props) => {
    let { display, items, isLoading } = props;
    console.log(items);
    return (
        <div>
            {isLoading && <h3 style={{ "alignItems": "center", "justifyContent": "center", "margin": "50px", "display": "flex" }}>Loading ...</h3>}
            {!display && <ItemList searchResults={items} />}
            {display && <h3 style={{ "alignItems": "center", "justifyContent": "center", "margin": "50px", "display": "flex" }}>No Data Found</h3>}

        </div>
    )
}

export default Home;