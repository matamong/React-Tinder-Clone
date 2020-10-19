import React from 'react';
import './App.css';
import Header from "./Header"
import TinderCards from "./TinderCards"
import SwipeButtons from "./SwipeButtons"
import Chats from "./Chats"
import ChatScreen from "./ChatScreen"
import Profile from "./Profile"
import { Login } from "./components/login/Index"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/profile">
            <Header backButton="/" />
            <Profile />
          </Route>
          <Route path="/login">
            <Header backButton="/" />
            <Login />
          </Route>
          <Route path="/">{/* Default route has always writed in the bottom of the route. */}
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
