import React from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

import "./styles/assets/vendor/nucleo/css/nucleo.css"
import "./styles/assets/vendor/font-awesome/css/font-awesome.min.css"
import "./styles/assets/css/argon-design-system-react.css"
import './App.css';
import RegisterPageOne from "./components/Auth/RegsiterPageOne"
import Navigationbar from "./components/layout/Navbar"
import Profilepageone from "./components/Profile/Profilepageone"
import Profilepagetwo from "./components/Profile/Profilepagetwo"
import Alert from "./components/layout/Alert"

// REDUX STORE CONFIG
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navigationbar />
      <Alert />
      <Switch>
        <Route path="/" exact component={RegisterPageOne} />
        <Route path="/profilepageone" exact component={Profilepageone} />
        <Route path="/profilepagetwo" exact component={Profilepagetwo} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
