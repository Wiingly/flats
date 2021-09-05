import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Stats from "./components/Stats";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Total from "./components/Total"
import AddWing from "./components/AddWing"
import ProtectedRoute from "./components/ProtectedRoute";
import Friend from "./components/Friend"

function App() {

  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp} />
      <ProtectedRoute path="/stats" component={Stats}/>
      <ProtectedRoute path="/home" component={Total}/>
      <ProtectedRoute path="/new" component={AddWing}/>
      <ProtectedRoute path="/friend" component={Friend}/>
    </div>
  );
}

export default App;

