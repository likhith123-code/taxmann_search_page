import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../App.css'

const Navbar = (props) => {
    const [input, setInput] = useState("");
    const history = useHistory();
    const searchHandler = (e) => {
        const find = e.target.value;
        setInput(find);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        history.push('/');
        props.searchText(input);
        setInput("");
    }
    return (
        <nav>
            <div className='icon'>
                <img src='https://d3lzbbhyvqc4k.cloudfront.net/images-webp/main-logo.webp' width="150px" height="40px" alt='not' />
            </div>
            <div className='search-box'>
                <form onSubmit={submitHandler}>
                    <input type="search" placeholder="Search Anything in Taxmann Practice" value={input} onChange={searchHandler} />
                    <input type="submit" hidden />
                </form>
            </div>
        </nav>
    )
}

export default Navbar;