import React, { useEffect } from 'react';
import './App.css';
import Home from "./components/home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/header/Header"
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import {useStateValue} from "./components/stateProvider/StateProvider"
import {auth} from "./firebase"

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    }
  }, [])

  console.log("USER IS >>>>>", user)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
