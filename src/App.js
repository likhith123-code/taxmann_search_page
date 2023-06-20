import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import EachItem from './Items/EachItem'
import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(false);
  const [display, setDisplay] = useState(true)
  const searchTextHandler = (text) => {
    console.log(text);
    setDisplay(false);
    setLoading(true);
    setItems([]);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("query", text);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded
    };
    // Fetching the data
    fetch(process.env.REACT_APP_FETCH_URL, requestOptions)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      }).then(data => {
        setItems(data);
        console.log(data);
        setLoading(false);

      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    setDisplay(true);
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar searchText={searchTextHandler} />
      </div>

      <Switch>
        <Route exact path='/'>
          <Home display={display} isLoading={isLoading} items={items} />
        </Route>
        <Route path='/searchResults/:id'>
          <EachItem />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
