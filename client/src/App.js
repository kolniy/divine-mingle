import React, { useEffect } from "react"
import { Switch, BrowserRouter as Router, Route } from "react-router-dom"

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
import OtherUsersProfile from "./components/dashboard/OthersProfile/ProfileDisplay"
import PrivateRoute from "./components/routing/PrivateRoute"
import PubliceRoute from "./components/routing/PublicRoute"
import ChatPage from "./components/dashboard/messages/ChatPage"
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
    store.dispatch(loadUser()) // load user when app mounts, checks for authentication
  }, [])

  return (
    <Provider store={store}>
    <Router>
      <Alert />
      <Switch>
        <PubliceRoute path="/" exact component={Register} />
        <PubliceRoute path="/login" exact component={Login} />
        <PrivateRoute path="/profilepageone" exact component={Profilepageone} />
        <PrivateRoute path="/profilepagetwo" exact component={Profilepagetwo} />
        <PrivateRoute path="/profilepagethree" exact component={Profilepagethree} />
        <PrivateRoute path="/dashboard/profile" exact component={DashboardProfile} />
        <PrivateRoute path="/dashboard/visitors" exact component={VisitorsDisplay} />
        <PrivateRoute path="/dashboard/match" exact component={MatchDisplay} />
        <PrivateRoute path="/dashboard/favourite" exact component={FavouriteDisplay} />
        <PrivateRoute path="/dashboard/forum" exact component={ForumsDisplay} />
        <PrivateRoute path="/dashboard/forum/article/articleId" exact component={ForumArticleDisplay} />
        <PrivateRoute path="/dashboard/profile/user/:profileId" exact component={OtherUsersProfile} />
        <Route path="/dashboard/messages" exact component={ChatPage} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
