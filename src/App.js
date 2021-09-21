import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";
import "./assets/css/style.css"
import "./assets/css/reset.css"
import Connect from "./views/pages/Connect";
import Overview from "./views/pages/Overview";
import AS from "./views/pages/AS";
import Stat from "./views/pages/Stat";
import EditSensor from "./views/pages/EditSensor";
import Ayar from "./views/component/Ayar";
import StatBig from "./views/pages/StatBig";
function App() {
  return (
    <Router>
    <div className="page">
    <Ayar/>
      
    <Switch>

   

        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/stats" exact>
         <StatBig/>
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
        <Route path="/statistic" exact>
          <Stat/>
        </Route>

        <Route path="/edit-sensor" exact>
          <EditSensor/>
        </Route>
     
      </Switch>
    </div>
  </Router>
  );
}

export default App;
