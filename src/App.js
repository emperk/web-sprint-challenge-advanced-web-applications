import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";
import axiosWithAuth from "./helpers/axiosWithAuth";

function App() {

  const logout = () => {
    const token = localStorage.getItem("token")
    axiosWithAuth()
      .post(`http://localhost:5000/api/logout`)
      .then(res => {
        localStorage.removeItem("token");
        window.location.href = "/";
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a onClick={logout} data-testid="logoutButton" href="#">logout</a>
        </header> 

        <Switch>
          <PrivateRoute exact path="/colors" component={BubblePage} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.