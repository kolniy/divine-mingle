import React, { useEffect } from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

import "./styles/assets/vendor/nucleo/css/nucleo.css"
import "./styles/assets/vendor/font-awesome/css/font-awesome.min.css"
import "./styles/assets/css/argon-design-system-react.css"
import './App.scss';

import Register from "./components/Auth/Regsiter"
import Login from "./components/Auth/Login"
import Profilepageone from "./components/Profile/Profilepageone"
import Profilepagetwo from "./components/Profile/Profilepagetwo"
import Profilepagethree from "./components/Profile/Profilepagethree"
import DashboardProfile from "./components/dashboard/UserProfile/Profiledisplay"
import VisitorsDisplay from "./components/dashboard/visitors/VisitorsDisplay"
import MatchDisplay from "./components/dashboard/matches/MatchDisplay"
import FavouriteDisplay from "./components/dashboard/favourites/FavouriteDisplay"
import ForumsDisplay from "./components/dashboard/forum/Forums-display"
import ForumArticleDisplay from "./components/dashboard/forum-article/ForumArticleDisplay"
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
      <Alert />
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/profilepageone" exact component={Profilepageone} />
        <Route path="/profilepagetwo" exact component={Profilepagetwo} />
        <Route path="/profilepagethree" exact component={Profilepagethree} />
        <PrivateRoute path="/dashboard/profile" exact component={DashboardProfile} />
        <PrivateRoute path="/dashboard/visitors" exact component={VisitorsDisplay} />
        <PrivateRoute path="/dashboard/match" exact component={MatchDisplay} />
        <PrivateRoute path="/dashboard/favourite" exact component={FavouriteDisplay} />
        <PrivateRoute path="/dashboard/forum" exact component={ForumsDisplay} />
        <Route path="/dashboard/forum/article/articleId" exact component={ForumArticleDisplay} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
