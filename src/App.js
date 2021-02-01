import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="App">
          <Route path="/" component={Home} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/create" component={Home} exact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
