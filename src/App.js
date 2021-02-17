import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import CreatePage from "./components/CreatePage/CreatePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="App">
          <Toolbar></Toolbar>
          <Route path="/" component={Home} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/create" component={CreatePage} exact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
