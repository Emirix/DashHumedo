import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";
import "./assets/css/style.css"
import "./assets/css/reset.css"
import Connect from "./views/pages/Connect";
import Overview from "./views/pages/Overview";
import AS from "./views/pages/AS";
function App() {
  return (
    <Router>
    <div className="page">
 
      
    <Switch>

        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/register" exact>
          <Register/>
        </Route>

        <Route path="/connect-router" exact>
          <Connect/>
        </Route>

        <Route path="/overview" exact>
          <Overview/>
        </Route>

        <Route path="/account-settings" exact>
          <AS/>
        </Route>
     
     
      </Switch>
    </div>
  </Router>
  );
}

export default App;
