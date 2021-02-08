import React, { useEffect } from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

import "./styles/assets/vendor/nucleo/css/nucleo.css"
import "./styles/assets/vendor/font-awesome/css/font-awesome.min.css"
import "./styles/assets/css/argon-design-system-react.css"
import './App.scss';

import Register from "./components/Auth/Regsiter"
import Login from "./components/Auth/Login"
import Navigationbar from "./components/layout/Navbar"
import Profilepageone from "./components/Profile/Profilepageone"
import Profilepagetwo from "./components/Profile/Profilepagetwo"
import Profilepagethree from "./components/Profile/Profilepagethree"
import DashboardProfile from "./components/dashboard/UserProfile/Profiledisplay"
import PrivateRoute from "./components/routing/PrivateRoute"
import Alert from "./components/layout/Alert"

// REDUX STORE CONFIG
import { Provider } from "react-redux"
import store from "./store"
import { loadUser } from "./actions/auth"
import setAuthToken from "./utilities/setAuthToken"

if(localStorage.getItem("token")){
  setAuthToken(localStorage.getItem("token"))
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
    // @todo load user profile to check if user profile is complete and route accordingly
    // console.log(store)
  }, [])

  return (
    <Provider store={store}>
    <Router>
      <Navigationbar />
      <Alert />
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/profilepageone" exact component={Profilepageone} />
        <PrivateRoute path="/profilepagetwo" exact component={Profilepagetwo} />
        <PrivateRoute path="/profilepagethree" exact component={Profilepagethree} />
        <PrivateRoute path="/dashboard/profile" exact component={DashboardProfile} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
