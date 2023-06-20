import React from "react";
import { useLocation } from 'react-router-dom';

const EachItem = () => {
    const location = useLocation();
    const data = location.data;
    return (
        <div className="outer-card">
            <div className="card">
                <h3>Score: {data.score} </h3>
                <p> {data.data}</p>
            </div>
        </div>
    );
}

export default EachItem;